
// let query = "raj"

const container = document.getElementById('movie_container');
const input = document.getElementById('input');
const btn = document.querySelector('.btn');


btn.addEventListener('click', () => {

    query = input.value;
    fetchMovies(query);
});
async function fetchMovies(){
    try {
        let url = `https://www.omdbapi.com/?t=${query}&apikey=85d52390`
        let data = await fetch(url);    
        let result = await data.json();
        renderHtml(result)
        
    } catch (error) {
        console.error('Error:', error);
    }        

}

function renderHtml(result) {
    const img = document.createElement('img');
    img.src = result.Poster;

    const title = document.createElement('h1');
    title.textContent = result.Title;

    const actor = document.createElement('h2');
    actor.textContent = result.Actors;
    
    container.innerHTML = ''; // Clear previous content
    container.appendChild(title);
    
    container.appendChild(actor);
    container.appendChild(img)
}






fetchMovies();