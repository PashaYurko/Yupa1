"use strict";
const numberOfFilms =+prompt('Скільки фільмивів ви переглянули?', '');
const personalMovieDB = {
    count:numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};
const a = prompt('Один із останніх фільмів', ''),
    b =prompt('На скільки оцінити його?', ''),
    c = prompt('Один із останніх фільмів', ''), 
    d =prompt('На скільки оцінити його?', '');
    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;
    console.log(personalMovieDB);
    