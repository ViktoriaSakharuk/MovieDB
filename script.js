let numberOfFilms;

while (numberOfFilms == null || numberOfFilms.length==0) {
    numberOfFilms = prompt("How many movies have you seen?", "");
   
}

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

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres: [],
    privat: false
};

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

console.log(personalMovieDB);









