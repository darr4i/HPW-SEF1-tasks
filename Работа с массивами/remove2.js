'use strict'

const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
const removeElement = () => {
let i = array.indexOf('Lima');
if (i >= 0){
   array.splice(i, 1);
  }
}
removeElement();
console.log(array); //["Kiev", "Beijing", "Saratov"]
