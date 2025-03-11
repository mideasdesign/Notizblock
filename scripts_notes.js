let notes = ['ham', 'Egg'];
let trash = [];
let notesTitles = ['Titel1', 'Titel2'];
let notesTitlesTrash = [];

function init(){
getFromLocalStorage();
    renderNotes();
}

function renderNotes() {
    let notesRef = document.getElementById('notes-list');
   notesRef.innerHTML = "";
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        notesRef.innerHTML += getNotesTemplate(indexNote);
    }
}

function renderTrashNotes() {
    let trashNotesRef = document.getElementById('notes-trash');
   trashNotesRef.innerHTML = "";
    for (let indexTrashNote = 0; indexTrashNote < trash.length; indexTrashNote++) {
        trashNotesRef.innerHTML += getTrashNotesTemplate(indexTrashNote);
    }
}
function renderTrashNotesTitle() {
    let trashNotesTitlesRef = document.getElementById('notes-trash');
    trashNotesTitlesRef.innerHTML = "";
    for (let indexTrashNoteTitle = 0; indexTrashNoteTitle < trash.length; indexTrashNoteTitle++) {
        trashNotesTitlesRef.innerHTML += getTrashNotesTemplate(indexTrashNoteTitle);
    }
}


function addNote(indexNote) {
    let noteContentRef = document.getElementById('input-note');
    let noteTitleRef = document.getElementById('input-note-title');
    let noteTitleInput = noteTitleRef.value;    
    let noteInput = noteContentRef.value;  
    notesTitles.push(noteTitleInput);
    notes.push(noteInput);
    saveToLocalStorage();
    renderNotes();
    noteTitleRef.value = "";
    noteContentRef.value = "";
}

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
  }
  
  function getFromLocalStorage() {
    let notesList = JSON.parse(localStorage.getItem("notes"));
    let notesListTitle = JSON.parse(localStorage.getItem("notesTitles"));
      notes = notesList;
      notesListTitle = notesTitles;
  }

function emtyTrash(indexTrashNote) {
    trash.splice(indexTrashNote, 1);
    renderTrashNotes();
}

function addToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trash.push(trashNote[0]);
    let trashNoteTitles = notesTitles.splice(indexNote, 1);
    notesTitlesTrash.push(trashNoteTitles[0]);
    
    renderNotes();
    renderTrashNotes();
}

function getNotesTemplate(indexNote) {
    return `<p>+ ${notesTitles[indexNote]} -  ${notes[indexNote]} <button onclick="addToTrash(${indexNote})">X</button></p>`
}
 function getTrashNotesTemplate(indexTrashNote) {
    return `<p>+ ${trash[indexTrashNote]} <button onclick="emtyTrash(${indexTrashNote})">emty trash</button></p>`
}

