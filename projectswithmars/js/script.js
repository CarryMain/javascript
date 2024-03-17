'use strict';
document.addEventListener('DOMContentLoaded', () => { 

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ]
    };

    const promo = document.querySelector('.promo__adv')
    const genre = document.querySelector('.promo__genre')
    const posterBg = document.querySelector('.promo__bg')
    const promoInterective = document.querySelector('.promo__interactive-list')
    const inputFilm = document.querySelector('.promo__interactive .add input[type="text"]')
    const formAdd = document.querySelector('.add')
    const checkbox = formAdd.querySelector('[type="checkbox"]')

    promo.remove()
    
    const makeChanges = () => { 
        genre.textContent = 'драма'
        posterBg.style.backgroundImage = "url('img/bg.jpg')"
    }
    
    const sortArray = (arr) => { 
        arr.sort()
    }

    formAdd.addEventListener('submit', (e) => { 
        e.preventDefault()
        let input = inputFilm.value 
        const favorite = checkbox.checked;
        
        if(input) { 
            if(input.length > 21) { 
                input = `${input.substring(0, 22)} ...`
            }

            if(favorite) {
                console.log('Add like film')
            }
            movieDB.movies.push(input)
            sortArray(movieDB.movies)
            createMovieList(movieDB.movies, promoInterective)
        }
        
        e.target.reset()
    })

    function createMovieList(films, parent) { 
        sortArray(films)
        parent.innerHTML = ""
        films.forEach((item, i) =>  {
            parent.innerHTML += ` 
            <li class="promo__interactive-item">${i + 1} ${item}
                <div class="delete"></div>
            </li>
            `
        })

        document.querySelectorAll('.delete').forEach((btn, i) => {  
            btn.addEventListener('click', () => { 
                btn.parentElement.remove()
                movieDB.movies.splice(i, 1)
                createMovieList(films, parent)
            })
        })
    }

    createMovieList(movieDB.movies, promoInterective)
    makeChanges()
    
})