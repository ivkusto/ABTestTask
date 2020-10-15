
const HORIZON_HEIGHT = 0.01;
const SKY_SCREEN_PROPORTION = 0.8;
const X_AXIS_MARK = {
   width: 0.2,
   height: 0.01,
   offset: 0.03
};
const PITCH = {
   LINE_WIDTH: 0.005,
   BIG_MARK_WIDTH: 0.3,
   MID_MARK_WIDTH: 0.15,
   MID_STEP_DEGREE: 10,
   BIG_STEP_DEGREE: 20,
   FONT_SIZE: 0.04,
   FONT_OFFSET: 0.01,
   MAX_VISIBLE_DEGREE: 30
};
const ROLL = {
   LINE_WIDTH: 0.005,
   BIG_MARK_WIDTH: 0.05,
   MID_MARK_WIDTH: 0.025,
   ANGLE: Math.PI,
   R: 0.5,
   MID_STEP_DEGREE: 10,
   BIG_STEP_DEGREE: 20,
   FONT_SIZE: 0.04
};
const Y_AXIS_MARK={
   HEIGHT: 0.08,
   WIDTH: 0.04
};
export {
   HORIZON_HEIGHT,
   SKY_SCREEN_PROPORTION,
   X_AXIS_MARK,
   PITCH,
   ROLL,
   Y_AXIS_MARK
};
