let numberOfFilms;
function start() { 
    numberOfFilms = prompt('How much films your view?', 1);
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { 
        numberOfFilms = prompt('How much films your view?', 1);
    }
}

start();

const personalMovieDB = { 
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false,
}

console.log(personalMovieDB)

// const lastFilm = prompt('Last film view?', '')
// const currentEstimate = prompt('His estimate?', '')

// personalMovieDB.movie[lastFilm] = currentEstimate

function showMyDB() { 
    if(personalMovieDB.privat == false) { 
        console.log(personalMovieDB)
    }
}

let question;

function writeYourGenres() { 
    for(let i = 1; i <= 3; i++ ) { 
        question = prompt(`Your like genres is number ${i}`)
        personalMovieDB.genres.push(question)
    }
    
}


function rememberMyFilms() { 
    for(let i = 0; i < 2; i++) {
        const a = prompt('One of the latest films?', '')
        const b = prompt('What rating would you give him?', '')
    
        if(a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movie[a] = b 
        } else { 
            i--
        }
    }
}

rememberMyFilms();
writeYourGenres();
showMyDB();


