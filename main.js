let notes = [];
function rendererNotes(){
let contentRef = document.getElementById('note-content');
let noteTitle = document.getElementById('note-title');
contentRef.innerHTML = notes;
}
function addNote(){
let noteInputRef = document.getElementById('input_note');
let noteInput = noteInputRef.value;
notes.push(noteInput);

rendererNotes();
noteInputRef.value ="";
}