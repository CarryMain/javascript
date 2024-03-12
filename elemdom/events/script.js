const btn = document.querySelector('button')

let i = 0
const del = (event) => {
    i++
    if(i == 1) { 
        btn.removeEventListener('click', del)
    }
}

btn.addEventListener('click', del)
// btn.removeEventListener('click', del)

const link = document.querySelector('a')

link.addEventListener('click', function(event) {
    event.preventDefault()
})