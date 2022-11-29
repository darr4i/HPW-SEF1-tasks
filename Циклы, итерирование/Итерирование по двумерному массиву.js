'use strict'

const m = ([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
 function max(arg){
     arg.flat();
     return Math.max.apply(null, arg.flat());
 }
console.log(max(m))
//9
