import { HORIZON_HEIGHT } from "../Consts/sizes";
import { Colors } from "../Consts/colors";
import { IState } from "../FlightDirector";

export function drawBackground(ctx: CanvasRenderingContext2D, state: IState) {
   const width = Math.ceil(
      Math.sqrt(
         Math.pow(state.width / 2, 2) + Math.pow(state.horizonOffset, 2)
      ));
   const height = state.height;
   // sky
   ctx.fillStyle = Colors.sky;
   ctx.fillRect(-width, -height * 2, width * 2, height * 2);

   // extra sky
   ctx.fillRect(-width, height * 2, width * 2, height);

   // ground
   ctx.fillStyle = Colors.ground;
   ctx.fillRect(-width, 0, width * 2, height * 2);

   // extra ground
   ctx.fillRect(-width, -height * 3, width * 2, height);

   // horizon
   const horizonPixelHeight = state.height * HORIZON_HEIGHT;
   ctx.fillStyle = Colors.horizon;
   ctx.fillRect(-width, 0 - horizonPixelHeight / 2, width * 2, horizonPixelHeight);
}