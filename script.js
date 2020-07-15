const notes = [
    {title:'My next trip',
    completed: true},
    {title:'Habbits to work on',
    completed:false},
    {title:'Office modification',
    completed:true}
]

const filters = {
    searchText : '',
    hideCompleted:false
}

const renderText = function(notes, filters){
    const filteredArray = notes.filter(function(x){
        return x.title.toLowerCase().includes(filters.searchText.toLowerCase())
    }).filter(function(v){
        return !v.completed || !filters.hideCompleted
    })
    

    document.querySelector('#division').innerHTML=''

    filteredArray.forEach(function (n){
        const oneNote = document.createElement('p')
        oneNote.textContent = n.title
        document.querySelector('#division').appendChild(oneNote)
    })
}
renderText(notes,filters)

document.querySelector('#myInput').addEventListener('input',function (e){
    filters.searchText = e.target.value
    renderText(notes, filters)
})
document.querySelector('#myForm').addEventListener('submit', function (e){
    e.preventDefault()
    notes.push({
        title: e.target.elements.text.value
    })
    renderText(notes,filters)
    e.target.elements.text.value = ''
})

document.querySelector('#myChec').addEventListener('change', function (e){
    filters.hideCompleted = e.target.checked
    renderText(notes,filters)
})
document.querySelector('#mySelect').addEventListener('change',function(e){
    console.log(e.target.value)
})