'use strict'

const a = sum(1, 2, 3);
const b = sum(0);
const c = sum();
const d = sum(1, -1, 1);
const e = sum(10, -1, -1, -1);

function sum(...args){
    let result = 0;
    for(let el of args)
        result += el;
    return result;
}
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
