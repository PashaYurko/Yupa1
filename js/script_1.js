"use strict";
const numberOfFilms = prompt("Скільки фільмів ви подивились?", ""),
    personalVovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };console.log(personalVovieDB);

    const Q_1 = prompt("Останній переглянутий фільм?", ""),
          Q_2 = prompt("На скільки його оцінюєш?", ""), 
          Q_3 = prompt("Останній переглянутий фільм?", ""),
          Q_4 = prompt("На скільки його оцінюєш?", "");
          personalVovieDB.movies[Q_1] = Q_2;
          personalVovieDB.movies[Q_3] = Q_4;
          
