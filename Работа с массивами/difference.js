'use strict'

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const arrayCities1 = ['Beijing', 'Kiev'];
const arrayCities2 = ['Kiev', 'London', 'Baghdad'];

let difference1 = array1.filter(x => array2.indexOf(x) === -1);
let difference2 = arrayCities1.filter(x => arrayCities2.indexOf(x) === -1);

console.log(difference1);// [7, -2, 5]
console.log(difference2)// ["Beijing"]
