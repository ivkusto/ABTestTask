import { Colors } from "../Consts/colors";
import { ROLL } from "../Consts/sizes";
import { IState } from "../FlightDirector";
import { degreeToRad, radToDegree } from "../Utils/angle";

export function rollLevel(ctx: CanvasRenderingContext2D, state: IState) {
   const height = state.height;
   ctx.lineWidth = ROLL.LINE_WIDTH * state.width;
   const OYAngle = Math.PI * 1.5;
   ctx.strokeStyle = Colors.scaleColor;
   ctx.beginPath();
   const pixelR = state.width * ROLL.R;
   ctx.arc(0, 0, pixelR, OYAngle - ROLL.ANGLE, OYAngle + ROLL.ANGLE);
   const bigMarkWidth = ROLL.BIG_MARK_WIDTH * state.width;
   const midMarkWidth = ROLL.MID_MARK_WIDTH * state.width;

   ctx.textAlign = "center";
   ctx.textBaseline="bottom";
   ctx.font = `100 ${ROLL.FONT_SIZE*state.width}px serif`;
   ctx.fillStyle=Colors.scaleColor;

   for (let i = radToDegree(- ROLL.ANGLE);
      i < radToDegree( ROLL.ANGLE);
      i += ROLL.MID_STEP_DEGREE) {
      const rad = degreeToRad(i);
      const needText = i % ROLL.BIG_STEP_DEGREE === 0;
      const strokeWidth = needText ? bigMarkWidth : midMarkWidth;
      ctx.rotate(rad);

      ctx.moveTo(0, -pixelR);
      ctx.lineTo(0, -pixelR - strokeWidth);
      if (needText) {
         ctx.fillText(i.toString(), 0, -pixelR - strokeWidth);
      }

      ctx.rotate(-rad);
   }
   ctx.stroke();
}
