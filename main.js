let notes = [];
let trash = [];
let notesTitles = [];
let notesTitlesTrash = [];
let notesArchive = [];
let notesTitlesArchive = [];

function renderNotes() {
getFromLocalStorage();
    let notesRef = document.getElementById('notes-list');
    let notesTitleRef = document.getElementById('notes-list');
    let notesArchiveRef = document.getElementById('notes-archive');
   notesRef.innerHTML = "";
   notesTitleRef.innerHTML = "";
   notesArchiveRef.innerHTML = "";
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

function renderArchiveTitles() {
    let archiveNotesRef = document.getElementById('notes-archive');
    archiveNotesRef.innerHTML = "";
    for (let indexArchiveNoteTitle = 0; indexArchiveNoteTitle < notesTitlesArchive.length; indexArchiveNoteTitle++) {
        archiveNotesRef.innerHTML += getArchiveNotesTemplate(indexArchiveNoteTitle);
    }
}

function renderNotesArchive() {
    let notesArchiveRef = document.getElementById('notes-archive');
    notesArchiveRef.innerHTML = "";
    for (let indexNotesArchive = 0; indexNotesArchive < notesArchive.length; indexNotesArchive++) {
        notesArchiveRef.innerHTML += getArchiveNotesTemplate(indexNotesArchive);
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
        document.getElementById('notes-list').innerHTML += "I have changed!";
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
    renderNotesArchive();
}

function addToArchive(indexNote) {
    let archiveNote = notes.splice(indexNote, 1);
    notesArchive.push(archiveNote[0]);
    let notesTitlesArchive = notesArchive.splice(indexNote, 1);
    notesTitlesArchive.push(archiveNote[0]);
    renderTrashNotes();
    renderTrashNotesTitles();
    renderNotesArchive();
}

function modalOverlay(event){
    let toggleRef = document.getElementById('my-modal')
    toggleRef.classList.toggle('close');
}
