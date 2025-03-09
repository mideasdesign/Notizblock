let notes = ['banana', 'Erdbeere', 'apfel'];
let trash = [];
let notesTitles = ['title0', 'title1', 'title2'];
let notesTitlesTrash = [];

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
    renderNotes();
    noteTitleRef.value = "";
    noteContentRef.value = "";
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

