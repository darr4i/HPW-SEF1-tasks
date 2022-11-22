'use strict'

//first part of exercise
let a = 5, b;
const inc = (a) => ++a;
b = inc(a);

console.dir({a,b})
// {a: 5, b: 6 }


//second part
const object = {num: 4};
function inc1(object){
    if(typeof object === 'object'){
        object.num++;
    } return object;
}
console.dir(inc1(object))
// { num: 5 }
