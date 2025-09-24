function renderElement(movie) {
    const element = buildElement(movie);
    window.container.append(element);
}

function buildElement({title,id,vote_average,poster_path}){

    const template = `
        <article class="movie">
            <img class="movie-poster" src="//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}" alt="${title}">
            <p class="movie-title">${title}</p>
            <p class="movie-id">${id}</p>
            <span class="movie-rate">${vote_average}</span>
        </article>
    `;

    const movie = document.createElement('div');
    movie.innerHTML = template;

    return movie.firstElementChild;

}

function cleanMovieList(){
    window.container.innerHTML = '';
}

export default function renderMovieList(list) {
    cleanMovieList();
    list.forEach(renderElement)
}