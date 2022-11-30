'use strict'

const a = [1, 2, 3];
const b = [0];
const c = [];
const d = [1, -1, 1];
const e = [10, -1, -1, -1];

    const initialValue = 0;
    const sumWithInitial = (args) => args.reduce(
        (acc, val) => acc + val, initialValue
    );
console.log(sumWithInitial(a)); //6
console.log(sumWithInitial(b)); //0
console.log(sumWithInitial(c)); //0
console.log(sumWithInitial(d)); //1
console.log(sumWithInitial(e)); //7

