'use strict'

const arr = [1, 2, 3, 4, 5, 8]

// arr[99] = 0
console.log(arr.length)

arr.forEach(function(item, i, arr) { 
    console.log(`${i}: ${item} inside ${arr}`)
})

// arr.pop()
arr.push(10)

// console.log(arr)

// for(let i = 0; i < arr.length; i++) { 
//     console.log(arr[i])
// }

for(let key of arr) { // break and continue
    console.log(key)
}

const str = '2, 5, 10, 13, 11, 42, 12' //prompt('', '')

const products = str.split(', ')
products.sort(compareNum)
console.log(products.join(';'))

function compareNum(a, b) { 
    return a - b
}

 