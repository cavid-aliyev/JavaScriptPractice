'use strict';

const numberOfFilms = +prompt('Neçə dənə kinoya baxmısınız?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    private: true
};


for(let i = 1; i <= personalMovieDB.count; i++){
  const lastFilmOne = prompt('Baxdığınız ən son film', ''),
        IMDB1 = prompt('Neçə qiymət verərdiz?', '');

  if(lastFilmOne != null && IMDB1 != null && lastFilmOne !='' && IMDB1 !='' && lastFilmOne.length<50){
    personalMovieDB.movies[lastFilmOne] = IMDB1; //best practice is personalMovieDB.movies[lastFilmOne] because "." now working in every browser
    console.log('Done');
  }else{
    console.log("error");
    i--;
  }
}

if(personalMovieDB.count < 10){
  console.log("Çox az filmə baxılıb");
} else if( personalMovieDB.count >= 10 && personalMovieDB.count < 30){
  console.log('Həvəskarsız deyəsən');
} else if(personalMovieDB.count >= 30){
  console.log('Fanatsızki');
} else{
  console.log('Səhvlik baş verdi');
}

console.log(personalMovieDB);


