'use strict'

const array = ["15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
for (let i = 15; i <= 30; i++)
    console.log(i);

//second part of exercise

for (let i = 0; i < array.length; i++){
    if ((array[i] % 2) != 0)
        console.log(array[i]);
}
