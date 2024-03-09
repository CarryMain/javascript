const personalMovieDB = {     
    count: 0,
    movie: {},
    actors: {},
    genres: [],
    privat: false,
    writeYourGenres: function() { 
        for(let i = 1; i <= 3; i++ ) { 
            this.genres[i - 1] = prompt(`Your like genres is number ${i}`)
            if(this.genres[i - 1] === null || this.genres[i - 1] === '') {
                i--
            }
        }
    },
    showMyDB: function() { 
        if(this.privat == false) { 
            console.log(personalMovieDB)
        }
    },
    rememberMyFilms: function() { 
        for(let i = 0; i < 2; i++) {
            const a = prompt('One of the latest films?', '').trim()
            const b = prompt('What rating would you give him?', '')
        
            if(a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movie[a] = b 
            } else { 
                i--
            }
        }
    },
    start: function() { 
        this.count = prompt('How much films your view?', 1);
        while(this.count == '' || this.count == null || isNaN(this.count)) { 
            this.count = prompt('How much films your view?', 1);
        }
    },
    toggleVisibleMyDB: function() { 
        if(this.privat === false) {
            this.privat = true
        } else { 
            this.privat = false
        }
    },

}

// personalMovieDB.start()
// personalMovieDB.rememberMyFilms()
personalMovieDB.writeYourGenres()
personalMovieDB.showMyDB()

console.log(personalMovieDB.genres.forEach((item, i) => { 
    return `You like genre ${i + 1} - this is ${item} `
}))