let data = [

    {
        name: "Peso", 
        lastName: "Pluma"
    }, 
    {
        name: "J", 
        lastName: "Cole"
    }, 
    {
        name: "Dr", 
        lastName: "Dre"
    }

]

// render this data into a list


function callArtist(){

  for (let i=0; i <data.length; i++){

    artistOutput.innerHTML+= `<li class="list-group-item"> ${data[i].name} ${data[i].lastName}
    </li>`
  }
}
callArtist()

// Create a data base of your favorites songs of the previous artists and render them into 
// another UL 
// add your commit

let songs = [
{
    artist: "Peso Pluma",
songName:"La People II",
year: 2024
},
{
    artist: "J Cole",
    songName:"Photograph",
    year: 2018
    },
    {
        artist: "Dr. Dre",
        songName: "California Love",
        year:1995
        
        },

]

function renderSongs(){

for ( let i =0; i <songs.length; i++){

    favSongs.innerHTML+= `<li class="list-group-item"> ${songs[i].artist}: ${songs[i].songName}, ${songs[i].year} 
    </li>`

}

}
renderSongs()