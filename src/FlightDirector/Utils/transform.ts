/**
 * get arguments for setTranform
 * @param r - rotate angle
 * @param x - translateX value
 * @param y - translateY value
 */
export function getTransformArgs(r: number, x: number, y: number)
   : [number, number, number, number, number, number] {
   const xx = Math.cos(r);
   const xy = Math.sin(r);
   return [xx, xy, -xy, xx, x, y];
}
