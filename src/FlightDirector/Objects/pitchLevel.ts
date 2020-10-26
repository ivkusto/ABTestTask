import { Colors } from "../Consts/colors";
import { PITCH } from "../Consts/sizes";
import { IState } from "../FlightDirector";
import { radToDegree } from "../Utils/angle";

export function pitchLevel(ctx: CanvasRenderingContext2D, state: IState) {
   const height = state.height;
   ctx.lineWidth = PITCH.LINE_WIDTH * state.width;
   const bigMarkWidth = PITCH.BIG_MARK_WIDTH * state.width;
   const midMarkWidth = PITCH.MID_MARK_WIDTH * state.width;
   ctx.strokeStyle = Colors.scaleColor;
   ctx.beginPath();
   ctx.textAlign = "left";
   ctx.textBaseline = "middle";
   ctx.font = `100 ${PITCH.FONT_SIZE * state.width}px serif`;
   ctx.fillStyle = Colors.scaleColor;

   const start = Math.floor(
      Math.max(-180, radToDegree(state.pitch) - PITCH.MAX_VISIBLE_DEGREE) / PITCH.MID_STEP_DEGREE
   ) * PITCH.MID_STEP_DEGREE;

   const end = Math.floor(
      Math.min(180, radToDegree(state.pitch) + PITCH.MAX_VISIBLE_DEGREE) / PITCH.MID_STEP_DEGREE
   ) * PITCH.MID_STEP_DEGREE;

   for (let i = start; i <= end; i += PITCH.MID_STEP_DEGREE) {
      const isBig = i % PITCH.BIG_STEP_DEGREE === 0;
      const markWidth = isBig ? bigMarkWidth : midMarkWidth;
      ctx.moveTo(-markWidth / 2, i * height * 2 / 180);
      ctx.lineTo(markWidth / 2, i * height * 2 / 180);
      if (isBig) {
         ctx.fillText(i.toString(), markWidth / 2 + PITCH.FONT_OFFSET * state.width, i * height * 2 / 180);
      }
   }
   ctx.stroke();
}