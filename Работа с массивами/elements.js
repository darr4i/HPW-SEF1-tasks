'use strict'

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7];
const arrayCities = ['Kiev', 'Beijing', 'Lima', 'Saratov'];

const removeElements = (array, ...items) => {
   for (const item of items) {
      const index = array.indexOf(item);
      if (index !== -1) array.splice(index, 1);
   }
}
removeElements(arrayNumbers, 5, 1, 6);
console.log(arrayNumbers);

removeElements(arrayCities, 'Lima', 'Berlin', 'Kiev');
console.log(arrayCities);
