'use strict'

const array = [1, 2, 3, 4, 5, 6, 7];

let myIndex = array.indexOf(5);

const removeElement = () => {
    array.splice(myIndex, 1)
}
removeElement(array);
console.log(array); //[1, 2, 3, 4, 6, 7]
