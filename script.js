let students = [

    {
        name: "John", 
        age: 23
    }, 
    {
        name: "Alice", 
        age: 19
    }, 
    {
        name: "Bob", 
        age: "25"
    }

]

renderStudents()
// Render the array of students into an HTML List

function renderStudents(){

    for (let i =0; i < students.length; i++){

        outPutStudents.innerHTML += `   <li class="list-group-item"> ${students[i].name} is ${students[i].age} years old </li>
 ` 

    }    


}