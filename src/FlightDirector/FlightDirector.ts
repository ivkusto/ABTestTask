import { SKY_SCREEN_PROPORTION } from "./Consts/sizes";
import { drawBackground } from "./Objects/background";
import { pitchLevel } from "./Objects/pitchLevel";
import { rollLevel } from "./Objects/rollLevel";
import { rotateComera } from "./Objects/rotateCamera";
import { drawAxis } from "./Objects/axis";

export interface IState {
   roll: number;
   pitch: number;
   width: number;
   height: number;
   horizonOffset: number;
}
export type TLayer =
   (ctx: CanvasRenderingContext2D, state?: IState) => void;
const Layers: TLayer[] = [
   rotateComera([
      drawBackground,
      pitchLevel
   ]),
   rotateComera([
      rollLevel
   ], true),
   drawAxis
];
export class FlightDirector {
   private _roll: number = 0;
   private _pitch: number = 0;
   private _ctx: CanvasRenderingContext2D;
   private _canvas: HTMLCanvasElement;
   constructor(canvas: HTMLCanvasElement) {
      this._ctx = canvas.getContext('2d');
      this._canvas = canvas;
      this._addResizeHandler();
      this.resize();
   }
   private _render() {
      const height = this._canvas.clientHeight;
      const state = {
         roll: this._roll,
         pitch: this._pitch,
         width: this._canvas.clientWidth,
         height,
         horizonOffset: height * SKY_SCREEN_PROPORTION
      };

      this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
      Layers.forEach(renderLayer => renderLayer(this._ctx, state));
   }
   resize() {
      this._canvas.width = this._canvas.offsetWidth;
      this._canvas.height = this._canvas.offsetHeight;
      this._render();
   }

   setRoll = (roll: number) => {
      this._roll = roll;
      window.requestAnimationFrame(() => this._render());
   }

   setPitch = (pitch: number) => {
      this._pitch = pitch;
      window.requestAnimationFrame(() => this._render());
   }

   _addResizeHandler() {
      window.onresize = () => {
         this.resize();
      };
   }
}



