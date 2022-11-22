'use strict'

const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};
function ages(){
    const calculate = {};
    for(let el in persons){
        const person = persons[el];
        calculate[el] = person.died - person.born;
    }
    return calculate;
}
console.log(ages())
//Object {lenin: 54, mao: 83, gandhi: 79, hirohito: 88}

