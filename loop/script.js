'use strict';

let num = 50;

// while (num < 55) { 
//     console.log(num) 
//     num++;
// }

// do { 
//     console.log(num)
//     num++
// } while(num < 55)

for(let i = 1; i < 8; i++) { 
    console.log(num)
    num++   
}

for(let i = 0; i < 3; i++) {
    console.log(i)
    for(let j = 0; j < 3; j++) {
        console.log(j) 
    }
}

let result = '';
const length = 7;

for(let i = 1; i < length; i++)  {

    for(let j = 0; j < i; j++) { 
        result += '*'
    }

    result += '\n'
}

console.log(result)

first: for(let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`)
    for(let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`) 
    }
        for(let k = 0; k < 3; k++) {
            if(k === 2) continue first
            console.log(`Third level: ${k}`)
        }
}

for(let i = 5; i <= 10; i++) { 
    console.log(i)
}

for(let i = 20; i >= 10; i--) {
    
    if(i === 13) break;
    console.log(i)
}

for(let i = 2; i <= 10; i++) {
    if(i % 2 === 1) continue
    console.log(i)
}

let i = 2;
while(i <= 10) {
    
    if(i % 2 === 0) {
        console.log(i)
    }
    i++
}

for(let i = 2; i <= 16; i++) {
    if(i % 2 === 0) {
        continue
    } else { 
        console.log(i)
    }
}

const arrayOfNumbers = []

for(let i = 5; i <= 10; i++) {
    arrayOfNumbers.push(i)
}

console.log(arrayOfNumbers)




function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(arr[i])
    }

    return result;
}

console.log(firstTask())

function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for(let i = 0; i < data.length; i++) {
        if(typeof data[i] === 'number') {
            data[i] = data[i] * 2
        }
        if(typeof data[i] === 'string') {
            data[i] += ' - done'
        }
    }
    

    return data;
}

console.log(secondTask())




function thirdTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    for(let i = data.length - 1; i >= 0; i--) {
        result.push(data[i])
    }

    return result;
}

console.log(thirdTask())



