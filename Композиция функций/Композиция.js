'use strict'

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)

const composition = pipe(
    inc,
    twice,
    cube
);
console.log(composition(5))
//1728
