"use sctict";

let numberOfFilms;



let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres: [],
    privat: false,
    start: function() {
        numberOfFilms = +prompt("How many movies have you seen?", "");
    
        while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("How many movies have you seen?", "");
        }
    },
    detectPersonalLevel: function() {
        if (numberOfFilms<10) {
            alert ('Quite a few');
        }
        else if(numberOfFilms>=10 && numberOfFilms<=30) {
            alert ('So good!');
        } 
        else if(numberOfFilms>30) {
            alert ('Fantastic!');
        }
        else {
            alert('Error!');
        }
    },
    writeYourGenres: function(){

            for ( let i=0; i<=2; i++) {
                personalMovieDB.genres[i] = prompt("Your favorite movie genre number " + (++i), "");
                i--;

            if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == "") {
                i--;
            }
            if(i == 2) {
                personalMovieDB.genres.forEach(function(genre, i, array){
                    console.log(`Favorite genre # ${i+1} is ${genre}`);
                });
            }    
            
        }
    },
            
        rememberMyFilms: function() {
        for (let i=0; i<2; i++) {
            let a;
            let b;
           
             while (a == null || a.length==0 || a.length>50) {
                a = prompt("What is the last movie you watched?", ""); 
            }
        
            while (b == null || b.length==0 ) {
                b = prompt("Rate this movie, please", ""); 
            }
                personalMovieDB.movies[a]=b;
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == false) {
            personalMovieDB = true;
        }
        else {
            personalMovieDB = false;
        }
    }


};

personalMovieDB.start(); 

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();

personalMovieDB.rememberMyFilms();

console.log(personalMovieDB);









