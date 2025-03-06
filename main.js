let notes = [];
function rendererNotes(){
let contentRef = document.getElementById('content')
contentRef.innerHTML = notes;
}
function addNote(){
let noteInputRef = document.getElementById('input_note');
let noteInput = noteInputRef.value;
notes.push(noteInput);

rendererNotes();
noteInputRef.value ="";
}