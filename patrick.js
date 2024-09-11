let data = [

    {
        name: "Peso", 
        lastName: "Pluma"
    }, 
    {
        name: "Jay", 
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