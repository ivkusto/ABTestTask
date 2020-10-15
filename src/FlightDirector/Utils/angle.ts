export function degreeToRad(degree: number): number {
   return degree * Math.PI / 180;
}
export function radToDegree(rad: number): number {
   const degree360= (rad * 180 / Math.PI) % 360;
   return degree360<= 180 ? degree360: degree360 - 360;
}
