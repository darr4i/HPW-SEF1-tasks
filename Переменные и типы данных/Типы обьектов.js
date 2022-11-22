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
