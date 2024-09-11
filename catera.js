let data = [
    {
        song : "Smells Like Teen Spirit", 
        artist: "Nirvana"
    }, 
    {
        song: "One",
        artist: "U2"
    }, 
    {
        song: "Billie Jean", 
        artist: "Michael Jackson"
    }
]

// render this data into a UL
function renderAllSongs(){
    let tableLayout = `<tr>
                        <th>Song</th>
                        <th>Artist</th>
                        </tr>`

    for(let i=0; i<data.length; i++){
        tableLayout += `<tr>
                        <td>${data[i].song}</td>
                        <td>${data[i].artist}</td>
                        </tr>`
    }
    songs.innerHTML = tableLayout
}