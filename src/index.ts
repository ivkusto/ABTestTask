import { FlightDirector } from "./FlightDirector/FlightDirector";
import { degreeToRad } from "./FlightDirector/Utils/angle";

window.addEventListener("load", main);
const SPEED_FACTOR = 0.05;
function main() {
   const canvas = document.getElementById('cvs') as HTMLCanvasElement;
   const speed = { x: 0, y: 0 };
   let isTicking = false;
   let roll = 0;
   let pitch = 0;
   const FD = new FlightDirector(canvas);
   addRollPitchChangeHandler();
   addControllerHandlers();
   // simulate socket
   setInterval(_dataUpdate, 100);
   function addRollPitchChangeHandler() {
      [
         'roll-range',
         'roll-input',
         'pitch-range',
         'pitch-input'
      ].map((id) => document.getElementById(id))
         .forEach((el: HTMLInputElement) => el.addEventListener('input', valueChangeCallback));
   }

   function valueChangeCallback(this: HTMLInputElement, event: Event) {
      isTicking = false;
      const value = (event.target as HTMLInputElement).value;
      this.form[this.dataset.bind].value = value;

      (this.dataset.type === 'roll'
         ? FD.setRoll
         : FD.setPitch)(degreeToRad(parseInt(value, 10)));
   }



   function addControllerHandlers() {
      [
         ['btn-up', 'y', -SPEED_FACTOR],
         ['btn-down', 'y', SPEED_FACTOR],
         ['btn-left', 'x', -SPEED_FACTOR],
         ['btn-right', 'x', SPEED_FACTOR]
      ].forEach(([id, axis, speedFactor]: [string, string, number]) => {
         document.getElementById(id).addEventListener('mousedown', () => {
            isTicking = true;
            speed[axis] = speedFactor;
         });
         document.getElementById(id).addEventListener('mouseup', () => {
            isTicking = false;
            speed[axis] = 0;
         });
      });
   }


   function _dataUpdate() {
      if (isTicking) {
         roll = _normByInterval(roll + speed.x);
         pitch = _normByInterval(pitch + speed.y);
         FD.setRoll(roll);
         FD.setPitch(pitch);
      }
   }

   function _normByInterval(value: number) {
      return Math.abs(value) < Math.PI
         ? value
         : Math.sign(value) * Math.PI;
   }
}

