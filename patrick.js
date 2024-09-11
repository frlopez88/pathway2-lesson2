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