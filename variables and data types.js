'use strict'

// by-value
let a = 5, b;
const inc = (a) => ++a;
b = inc(a);

console.dir({a,b})
// {a: 5, b: 6 }



// by-refence
const object = {num: 4};
function inc1(object){
    if(typeof object === 'object'){
        object.num++;
    } return object;
}
console.dir(inc1(object))
// { num: 5 }




// types of objects
const array = [true, 'hello', 5, 12, -200, false, false, 'word', 'Rosa', 677, true, 909, 3, 'V'];
const collection = {
    numbers: 0 ,
    strings: 0 ,
    boolean: 0,
};
function amountElementsInArray(array) {
 const counters = {};

    for (let element of array) {
        const type = typeof element;
        const count = counters[type] || 0;
        counters[type] = count + 1 ;
    }
    return counters;
};
console.dir(amountElementsInArray(array))
// {boolean: 4, string: 4, number: 6}
