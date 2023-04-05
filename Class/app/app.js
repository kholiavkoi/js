import { NoteList } from './NoteList.js'



const newList = new NoteList(document.getElementById('app'), 'my', [{name: 'Todo 1'}, {name: 'Todo 2'}])

document.getElementById('action').addEventListener('click', function () {
    newList.add(prompt('Add name'))
    console.log(newList)
})