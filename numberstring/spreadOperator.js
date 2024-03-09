'use strict' 

let a = 5, b = a 
b = b + 5
console.log(a)
console.log(b)

const obj = { 
    a: 5,
    b: 1,
}

const copy = obj;
copy.a = 10;

console.log(obj)
console.log(copy)

function copy(mainObj) { //поверхностная копия объекта, то есть мы все также при смене значений у ключ - объект - ключ - значение меняем у обоих вариантов
    let objCopy = {} 
    let key 

    for(key in mainObj) {
        objCopy[key] = mainObj[key]
    }

    return objCopy
}

const numbers = { 
    a: 2, 
    b: 5, 
    c: { 
        x: 7, 
        y: 10,
    }
}

// const newNumbers = copy(numbers)

// newNumbers.a = 10
// newNumbers.c.x = 10
// console.log(newNumbers)
// console.log(numbers)

const add = { 
    d: 18, 
    e: 20,
    f: { 
        a: 10,
        b: 12
    }
}

const clone = Object.assign({}, add)
clone.d = 20;
clone.f.a = 12
console.log(clone)
console.log(add)


const oldArray = ['a', 'b', 'c']
const newArrayone = oldArray.slice()

newArrayone[1] = 'hhahahha'

console.log(newArrayone)
console.log(oldArray)


const video = ['youtube', 'vimeo', 'rutube']
const blogs = ['wordpress', 'livejournal', 'blogger']
const internet = [...video, ...blogs, 'vk', 'facebook']

console.log(internet)

function log(a, b, c) { 
    console.log(a)
    console.log(b)
    console.log(c)
}

const num = [2, 5, 7]

log(...num)

const array = ['a', 'b']

const newAaray = [...array]

const q = { 
    one: 1, 
    two: 2,
}

const newObj = {...q}