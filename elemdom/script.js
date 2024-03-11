const box = document.getElementById('box')
const btns = document.getElementsByTagName('button')
const circles = document.getElementsByClassName('circle')
const hearts = document.querySelectorAll('.heart')
const oneHeart = document.querySelector('.heart')
const wrapper = document.querySelector('.wrapper')

box.style.backgroundColor = 'blue'
box.style.width = '500px'

box.style.cssText = 'background-color: orange; width: 600px'

btns[1].style.borderRadius = '100%'
circles[0].style.backgroundColor = 'red'

// for(let i = 0; i < hearts.length; i++) { 
//     hearts[i].style.backgroundColor = 'black'
// }

hearts.forEach(item => {item.style.backgroundColor = 'orange'})

const div = document.createElement('div')
const text = document.createTextNode('I am here')
div.classList.add('black')
document.body.append(div)

// wrapper.appendChild(div)


// document.querySelector('.wrapper').append(div)
// wrapper.prepend(div)
// hearts[0].before(div)
// hearts[0].after(div)
// wrapper.insertBefore(div, hearts[1])
// circles[0].remove()
// hearts[0].replaceWith(circles[0])

div.innerHTML = '<h1>Hello World</h1>'
// div.textContent = 'Hello'

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>')


