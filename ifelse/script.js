'use strict';

// if(5 == 0) { 
//     console.log('oK')
// } else { 
//     console.log('no')
// }

// const hamburger = 3; 
// const fries = 1; 
// const cola = 0;

// if(hamburger && fries) { 
//     console.log('i am eating')
// }

console.log(hamburger === 3 && cola == 1 && fries)

console.log(1 && 0)
console.log(1 && 5)
console.log(null && 5)
console.log(0 && 'aegfasdgasd')
console.log(null == false)

console.log(typeof null)
console.log(typeof undefined)
console.log(typeof [])


if(hamburger === 3 && cola == 1 && fries) { 
    console.log('All eating')
} else { 
    console.log('go out!')
}

let johnReport, samReport, mariaReport = 'done';

console.log(johnReport || samReport || mariaReport)
// console.log((hamburger && fries))


console.log( NaN || 2 || undefined );// 2 
console.log( NaN && 2 && undefined );//Nan
console.log( 1 && 2 && 3 );//3
console.log( !1 && 2 || !3 ); //false
console.log( 25 || null && !3 ); //25
console.log( NaN || null || !3 || undefined || 5);// 5
console.log( NaN || null && !3 && undefined || 5);//  5
console.log( 5 === 5 && 3 > 1 || 5);// true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
