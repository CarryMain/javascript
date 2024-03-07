'use strict';
let num = 20
function showFirstMessage(text) { 
    console.log(text)
    num = 10
}

showFirstMessage('Hello world');
console.log(num) 


function calc(a, b) { 
    return a + b
}

console.log(calc(4, 3))

function sayHiBye(firstName, lastName) {

    // функция-помощник, которую мы используем ниже
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    console.log( "Hello, " + getFullName() );
    console.log( "Bye, " + getFullName() );
  
  }

  sayHiBye('Kirill', 'Turanov')


function sum(a) {
    return function(b) {
        return a + b
    }
}

console.log(sum(5)(-1))

let x = 1;

function func() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 2;
}

func();

function inBetween(a, b) {
    return function(x) { 
        return x >= a && x <= b
    }
}

function inArray(arr) {
    return function(x) {
        return arr.includes(x)
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(name) {
    return (a, b) => a[name] > b[name] ? 1 : -1
}

console.log(users.sort(byField('name')))


const usdCurr = 28

function conver(amout, curr) { 
    console.log(curr * amout)
}

conver(500, usdCurr)


function sayHello(name) {
    return `Привет, ${name}`
}

function returnNeighboringNumbers(a) {
    let b = a - 1
    let c = a + 1
    return [b, a, c]
}

console.log(returnNeighboringNumbers(9))

function getMathResult(a, b) {
    let result = ''
    if(typeof b !== 'number' || b === 0) { 
        return a
    }
    for(let i = 1; i <= b; i++) {
        if(i === b) {
            result += `${a * i}`
        } else { 
            result += `${a * i}---`
        }
        
    }
    return result
}

console.log(getMathResult(5, ''))



function getMath(a, b) { 
    let arr = ''
    if(typeof b !== 'number' || b === 0) { 
        return a
    }
    for(let i = 1; i <= b; i++) { 
        if(b === i) { 
            arr += `${a * i}`
        } else  {
            arr += `${a * i}---`
        }  
    }
    return arr
}

console.log(getMath(5,5))