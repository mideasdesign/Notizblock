
let notes = [];
let trash = [];
let notesTitles = [];
let notesTitlesTrash = [];

function renderNotes() {
getFromLocalStorage();
    let notesRef = document.getElementById('notes-container');
    let notesTitleRef = document.getElementById('notes-container');
   notesRef.innerHTML = "";
   notesTitleRef.innerHTML = "";
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
function renderTrashNotesTitles() {
    let trashNotesTitlesRef = document.getElementById('notes-trash');
    trashNotesTitlesRef.innerHTML = "";
    for (let indexTrashNoteTitle = 0; indexTrashNoteTitle < trash.length; indexTrashNoteTitle++) {
        trashNotesTitlesRef.innerHTML += getTrashNotesTemplate(indexTrashNoteTitle);
    }
}

function addNote(indexNote) {
    let noteContentRef = document.getElementById('note-content');
    let noteTitleRef = document.getElementById('note-title');
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
    if (notesList == null) {
        document.getElementById('notes-container').innerHTML += "I have changed!";
    }
    else{
        notes = notesList;
    }
}

function emtyTrash(indexTrashNote) {
    trash.splice(indexTrashNote, 1);
    localStorage.removeItem("notes");
    localStorage.removeItem("notesTitles");
    renderTrashNotes();
    renderNotes();
}

function addToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trash.push(trashNote[0]);
    let trashNoteTitles = notesTitles.splice(indexNote, 1);
    notesTitlesTrash.push(trashNoteTitles[0]);
    let toggleRef = document.getElementById('my-modal')
    toggleRef.classList.toggle('close');
    renderTrashNotes();
    renderTrashNotesTitles();
}



function modalOverlay(event){
    let toggleRef = document.getElementById('my-modal')
    toggleRef.classList.toggle('close');
}
