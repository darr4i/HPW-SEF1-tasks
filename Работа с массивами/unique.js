'use strict'

const resultNumbers = unique([2, 1, 1, 3, 2]);
const resultDirection = unique(['top', 'bottom', 'top', 'left']);
function unique(arr) {
   let newArray = [];
   for (let str of arr) {
      if (!newArray.includes(str)) {
         newArray.push(str);
      }
   }
   return newArray;
}
console.log(resultNumbers) //[2, 1, 3]
console.log(resultDirection) //["top", "bottom", "left"]
