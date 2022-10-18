/*
import {PI, getCircumference, getArea} from "./math_util.js";


console.log(PI);

let circumference = getCircumference(10);
console.log(circumference);

let area = getArea(10);
console.log(area);

*/
// Second Method of importing

import * as MathUtil from "./math_util.js";

console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(10);
console.log(circumference);

let area = MathUtil.getArea(10);
console.log(area);