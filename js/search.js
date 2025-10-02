import movies from "./movies.js";
import render from "./render.js";

const $search = window['search-form'];

$search.addEventListener('submit', function(event){
    
    event.preventDefault();
    const formData = new FormData(this);
    const title = formData.get('title');
    const movies = searchMovie(title);
    console.log("🚀 ~ movies:", movies)

    if(movies){
        return render(movies);
    }

    return alert('No encontramos tu pelicula');

})

function searchMovie(query){
    
    if(isNaN(query)){
        // console.log(query)
        return filterByTitle(query);
    }

    return [findById(query)];
    // return findById(query);

}

function findById(id){

    // return movies.filter((movie) => {
    return movies.find((movie) => {
        return movie.id === parseInt(id, 10)
    })

}

function filterByTitle(title){

    return movies.filter((movie) => {
        return movie.title.toLowerCase().includes(title.toLowerCase());
    })

}