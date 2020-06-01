"use strict";
  
// ||
let numberOfFilms;

function start () 
        {numberOfFilms = +prompt("Скільки ти переглянув фільмів?", "");
        while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Скільки ти переглянув фільмів?", "");
    }
}
start ();
const personalVovieDB = {
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
    function rememberMyFilms () {
        for (let i = 0; i < 2; i++) { 
        const a = prompt("Останній переглянутий фільм?", ""),
                b = prompt("На скільки його оцінюєш?", "");  
         if (a !=null && a != "" && b != null && b != "" && a.length <=50 ) {
           personalVovieDB.movies[a] = b;console.log("done");
        } else {i--; console.log("Error");}
        }
    }
    rememberMyFilms ();
    
    function detectPersonalLevel (){ 
    if (personalVovieDB.count <= 10) {
        console.log("Переглянув доволі мало фільмфі");
    } else if (personalVovieDB.count > 10 && personalVovieDB.count <=30 ){
        console.log("Ви класичний глядач");
    } else if (personalVovieDB.count >= 30) {
        console.log("Ви кіноман !!!");
    } else {console.log("Виникла помилка");}}
    detectPersonalLevel();



        
    
            //   for (let i = 0; i > 1; i++){
            //   if  (numberOfFilms == null || numberOfFilms == "" || numberOfFilms == String || 
            //     numberOfFilms == Object) 
            //     {console.log("1"); i++;}
            // else {i++; console.log("2");}
     
            
function showMyDB (hidden){
    if (!hidden){
        console.log(personalVovieDB); 
        }     
}
showMyDB (personalVovieDB.privat);

           
          function writeYouGenres () {
              for (let i = 1; i <= 3; i++){
                personalVovieDB.genres[i-1] = prompt(`Ваш коханий жанр під номером? ${i}`);  
              }
          }  
          writeYouGenres ();

           
                
            
    