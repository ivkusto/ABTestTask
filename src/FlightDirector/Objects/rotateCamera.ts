import { IState, TLayer } from "../FlightDirector";

export function rotateComera(layers: TLayer[], withoutPinch?:boolean) {
   return (ctx: CanvasRenderingContext2D, state: IState) =>{
      const pitchPixelOffset = state.pitch * state.height * 2 / Math.PI;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      // translate to camera center
      ctx.translate(state.width / 2, state.horizonOffset);
      // apply roll
      ctx.rotate(-state.roll);
      if (!withoutPinch){
         // apply pitch
         ctx.translate(0, - pitchPixelOffset);
      }
      // render child layers
      layers.forEach(renderLayer => renderLayer(ctx, state));

      ctx.setTransform(1, 0, 0, 1, 0, 0);
   };
}