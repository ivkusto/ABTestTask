import { FlightDirector } from "./FlightDirector/FlightDirector";
import { degreeToRad } from "./FlightDirector/Utils/angle";

window.addEventListener("load", main);

function main() {
   const canvas = document.getElementById('cvs') as HTMLCanvasElement;
   const FD = new FlightDirector(canvas);
   addRollPitchChangeHandler();
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
      const value = (event.target as HTMLInputElement).value;
      this.form[this.dataset.bind].value = value;

      (this.dataset.type === 'roll'
         ? FD.setRoll
         : FD.setPitch)(degreeToRad(parseInt(value, 10)));
   }
}

