'use strict'

// let number = 5

// function logNumber() { 
//     console.log(number)
// }

// number = 6

// logNumber()

function createCounter() { 
    let counter = 0

    const myFunction = function() {
        counter += 1
        return counter
    }
    return myFunction
}

const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()

console.log(c1, c2, c3)


let sayHi = function func(who) { 
    if(who) { 
        console.log(`Hello ${who}`)
    } else { 
        func('Guest')
    }
}

sayHi('Kirill')

function sayHiBye(firstName, lastName)  {
    function getFullName() { 
        return firstName + ' ' + lastName
    }
    console.log('Hello' + getFullName())
    console.log('Bye' + getFullName())
}

console.log(sayHiBye('Kirill', 'Turanov'))

function foo(a, b) {
    const [first] = a
    const {eng} = b
    return `${first} ${eng}`
}

const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})

console.log(result)