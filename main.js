
let notes = [];
let trash = [];
let notesTitles = [];
let notesTitlesTrash = [];
let notesArchive = [];
let notesArchiveTitles = [];

function init(){
    getFromLocalStorage();
    renderNotes();
    renderArchiveNotes();
    }

function renderNotes() {
    let notesRef = document.getElementById('notes-list');
    let notesTitleRef = document.getElementById('notes-list');
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


function renderArchiveNotes() {
    let archiveNotesRef = document.getElementById('notes-archive');
    archiveNotesRef.innerHTML = "";
    for (let indexArchiveNote = 0; indexArchiveNote < notesArchive.length; indexArchiveNote++) {
        archiveNotesRef.innerHTML += getArchiveNotesTemplate(indexArchiveNote);
    }
}

function renderArchiveNotesTitles() {
    let archiveNotesTitleRef = document.getElementById('notes-archive');
     archiveNotesTitleRef.innerHTML = "";
    for (let indexArchiveNoteTitle = 0; indexArchiveNoteTitle < notesArchiveTitles.length; indexArchiveNoteTitle++) {
        archiveNotesTitleRef.innerHTML += getArchiveNotesTemplate(indexArchiveNoteTitle);
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
    let notesListTitles = JSON.parse(localStorage.getItem("notesTitles"));
    if (notesList == null) {
        document.getElementById('notes-list').innerHTML += "I have changed!";
    }
    else{
        notes = notesList;
        notesTitles = notesListTitles;
    }
}

function emtyTrash(indexTrashNote) {
    trash.splice(indexTrashNote, 1);
    localStorage.removeItem("notes");
    localStorage.removeItem("notesTitles");
    renderArchiveNotes();
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
    renderNotes();
}

function addToArchive(indexNote) {
    let archiveNote = notes.splice(indexNote, 1);
    notesArchive.push(archiveNote[0]);
    let notesArchiveTitles =  notesTitles.splice(indexNote, 1);
    notesArchiveTitles.push(notesArchiveTitles[0]);

    renderArchiveNotesTitles();
    renderArchiveNotes();
    renderTrashNotes();
    renderTrashNotesTitles();
    renderNotes();
}



function modalOverlay(event){
    let toggleRef = document.getElementById('my-modal')
    toggleRef.classList.toggle('close');
}
