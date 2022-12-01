'use strict'

const arr = array();
function array(){
    const a = [];
    const get = (i) => a[i];
    get.push = (value) => a.push(value);
    get.pop = () => a.pop();
    a.push('first');
    a.push('second');
    a.push('third');
    return get;
}
console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop())
