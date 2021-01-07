'use strict';

const numberOfFilms = +prompt('Neçə dənə kinoya baxmısınız?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    private: true
};


const lastFilmOne = prompt('Baxdığınız ən son film', ''),
      IMDB1 = prompt('Neçə qiymət verərdiz?', ''),
      LastFilmTwo = prompt('Baxdığınız ən son film', ''),
      IMDB2 = prompt('Neçə qiymət verərdiz?', '');


personalMovieDB.movies.lastFilmOne = IMDB1;
personalMovieDB.movies.LastFilmTwo = IMDB2;

console.log(personalMovieDB);