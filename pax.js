let data = [

    {
        movie: "Beekeper",
        genre: "Action"
    },
    {
        movie: "John Wick 4",
        genre: "Action"
    },
    {
        movie: "The Matrix",
        genre: "Action"
    }

]

// Render the data into a UL 
renderMovie()

function renderMovie(){

    for (let i=0; i <data.length; i++){
        outPutMovie.innerHTML += `<li class="list-group-item"> ${data[i].movie} ${data[i].genre} </li>`
    }
}