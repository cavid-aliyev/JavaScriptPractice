'use strict';

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
      movieList = document.querySelector('.promo__interactive-list');

promoReklam.forEach(item=>{
    item.remove();
});

genre.textContent = 'Drama';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.textContent = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i)=>{
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${film}
        <div class="delete"></div>
    </li>
    `;
});




