import { ROLL, X_AXIS_MARK, Y_AXIS_MARK } from "../Consts/sizes";
import { Colors } from "../Consts/colors";
import { getTransformArgs } from "../Utils/transform";
import { IState } from "../FlightDirector";

export function drawAxis(ctx: CanvasRenderingContext2D, state: IState) {

   ctx.setTransform(...getTransformArgs(0, state.width / 2, state.horizonOffset));
   const pixelHeight = state.height * X_AXIS_MARK.height;
   const pixelWidth = state.width * X_AXIS_MARK.width;
   const pixelOffset = state.width * X_AXIS_MARK.offset;
   // leftX
   ctx.fillStyle = Colors.xAxis;
   ctx.fillRect(-state.width / 2 + pixelOffset, -pixelHeight / 2
      , pixelWidth
      , pixelHeight);
   // rightX
   ctx.fillRect(state.width / 2 - pixelWidth - pixelOffset, -pixelHeight / 2
      , pixelWidth
      , pixelHeight);

   // centerX
   ctx.fillRect(-pixelHeight / 2, -pixelHeight / 2
      , pixelHeight
      , pixelHeight);

   // YMark
   ctx.beginPath();
   const pixelR = ROLL.R * state.width;
   const yPixelHeight = Y_AXIS_MARK.HEIGHT * state.width;
   const yPixelWidth = Y_AXIS_MARK.WIDTH * state.width;
   ctx.moveTo(0, -pixelR);
   ctx.lineTo(-yPixelWidth / 2, -pixelR - yPixelHeight);
   ctx.lineTo(yPixelWidth / 2, -pixelR - yPixelHeight);
   ctx.lineTo(0, -pixelR);
   ctx.fill();
}