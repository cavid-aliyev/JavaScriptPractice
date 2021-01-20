'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Loqan",
            "Лига справедливости",
            "LA-LA Land",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const promoReklam = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

        
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value,
              favorite = checkbox.checked;

              if(newFilm){

                if(newFilm.length >21){
                    newFilm = `${newFilm.substring(0, 22)}...`;
                }

                if(favorite){
                    console.log("Sevimlilərə əlavə olundu");
                }
                
                movieDB.movies.push(newFilm);
                sortArr(movieDB.movies);

                createMovieList(movieDB.movies, movieList);
              }

        e.target.reset();
    });



    const deletePromo = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    deletePromo(promoReklam);



    const makeChanges = () =>{
        genre.textContent = 'Drama';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    makeChanges();



    const sortArr = (arr) =>{
        arr.sort();
    };




    function createMovieList(films, parent) {

        parent.textContent = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) =>{
            btn.addEventListener('click', ()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                // Rekursiya
                createMovieList(films, parent);
            });
        });
    }

    createMovieList(movieDB.movies, movieList);

});