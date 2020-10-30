const numberOfFilms = prompt("How many movies have you seen?", "");

const firstQuestion = prompt("What is the last movie you watched?", "");
const secondQuestion = prompt("Rate this movie, please", "");

const personalMovieDB = {
count : numberOfFilms,
movies : {
    [firstQuestion] : secondQuestion
},
actors : {},
genres: [],
privat: false
};

console.log(personalMovieDB);






