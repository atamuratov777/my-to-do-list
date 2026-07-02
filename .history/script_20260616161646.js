let persons=
const tbody = document.getElementById('tbody')

function namechange(event){
    tbody.innerHTML=""
    persons.push({
        id:12,
        name:event.target.value
    })
    persons.forEach((person,index)=>{
        tbody.innerHTML+=<tr>
            <th>${index+1}</th>
            <th>${person.name}</th>
            <th></th>
        </tr>
    })
}

function clicktrash(basil){
    console.log(basil)
}