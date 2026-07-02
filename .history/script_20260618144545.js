let person=[]
const tbody=document.getElementById("tbody")

function namech(event){
    tbody.innerHTML=""
    person.push({
        id:12,
        name:event.target.value
    })
    person.forEach((person,index)=>{
        tbody.innerHTML+=`<tr>
        <th>${index+1}</th>
        <th>${person.name}<th>
        <th onClick={clicktrash(${index+1})} class="trash">🗑</th>
        </tr>`
    })
}

console.log("Usi ekran")

function clicktrash(basil) {
    tbody.innerHTML=""
    person.splice(basil-1,1)
    console.log(person)
    person.forEach((person,index)=>{
        tbody.innerHTML+=`<tr>
        <th>${index+1}</th>
        <th>${person.name}<th>
        <th onClick={clicktrash(${index+1})} class="trash">🗑</th>
        </tr>`
    })
}