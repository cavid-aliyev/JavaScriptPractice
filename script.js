'use strict';


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: {},
    private: true,
    start: function(){
      personalMovieDB.count = prompt('Neçə dənə kinoya baxmısınız?', '');
    
      while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        personalMovieDB.count = +prompt('Neçə dənə kinoya baxmısınız?', '');
      }
    },

    rememberMyFilms: function(){
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
    },

    detectPersonalLevel: function(){
      if(personalMovieDB.count < 10){
        console.log("Çox az filmə baxılıb");
      } else if( personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Həvəskarsız deyəsən');
      } else if(personalMovieDB.count >= 30){
        console.log('Fanatsızki');
      } else{
        console.log('Səhvlik baş verdi');
      }
    },

    showMyDB: function(hidden){
      if(!hidden){
        console.log(personalMovieDB);
      }
    },

    toggleVisibleMyDB: function(){
       if(personalMovieDB.private){
          personalMovieDB.private = false;
       }else{
         personalMovieDB.private = true;
       }
    },

    writeYourGenres: function(){
      for(let i = 1; i<= 3; i++){
        let genre = prompt(`Sizin sevdiyiniz janr ${i} nömrədədir.`);

        if(genre === '' || genre == null){
          console.log('Siz səhv məlumat ötürdünüz');
          i--;
        }else{
          personalMovieDB.genres[i- 1] = genre;
        }
      }

      personalMovieDB.genres.forEach((item, i) =>{
        console.log(`Sevimli janrıvız ${item} - ${i+1} nömrəli janrdır `);
      });
    }
    
};




