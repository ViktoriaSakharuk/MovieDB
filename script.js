let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many movies have you seen?", "");

    while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies have you seen?", "");
    }
}

start(); 

function detectPersonalLevel() {
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
}

detectPersonalLevel();

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres: [],
    privat: false
};

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres(){
    for ( let i=0; i<=2; i++) {
        personalMovieDB.genres[i] = prompt("Your favorite movie genre number " + (++i), "");
        i--;
    }
} 

writeYourGenres();

function rememberMyFilms() {
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
}

rememberMyFilms();





console.log(personalMovieDB);









