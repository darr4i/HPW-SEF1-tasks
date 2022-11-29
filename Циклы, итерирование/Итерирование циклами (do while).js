'use strict'

const a = sum(1, 2, 3);
const b = sum(0);
const c = sum();
const d = sum(1, -1, 1);
const e = sum(10, -1, -1, -1);

function sum(...args){
    let result = 0;
    do {
        result += args.pop();
    } while(args.length > 0);
    return result;
}
console.log(a); //6
console.log(b); //0
console.log(c); //NaN
console.log(d); //1
console.log(e); //7
