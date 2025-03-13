let notes = [];
let trash = [];
let notesTitlesTrash = [];
let notesTitles = [];
let notesArchive = [];
let notesTitlesArchive = [];

function init() {
  getFromLocalStorage();
  renderNotes();
}

function renderAll() {
  saveToLocalStorage();
  getFromLocalStorage();
  renderNotes();
  renderTrashNotes();
  renderTrashNotesTitles();
  renderArchiveNotesTitles();  
  renderArchiveNotes();
}

function renderNotes() {
  let notesRef = document.getElementById("notes-list");
  let notesTitleRef = document.getElementById("notes-list");
  notesRef.innerHTML = "";
  notesTitleRef.innerHTML = "";
  for (let indexNote = 0; indexNote < notes.length; indexNote++) 
    {
    notesRef.innerHTML += getNotesTemplate(indexNote);
    }
}

function renderTrashNotes() {
  let trashNotesRef = document.getElementById("notes-trash-container");
  trashNotesRef.innerHTML = "";
  for (let indexTrashNote = 0; indexTrashNote < trash.length;indexTrashNote++) 
    {
    trashNotesRef.innerHTML += getTrashNotesTemplate(indexTrashNote);
    }
}

function renderTrashNotesTitles() {
  let trashNotesTitlesRef = document.getElementById("notes-trash-container");
  trashNotesTitlesRef.innerHTML = "";
  for (let indexTrashNoteTitle = 0; indexTrashNoteTitle < trash.length; indexTrashNoteTitle++) 
    {
    trashNotesTitlesRef.innerHTML += getTrashNotesTemplate(indexTrashNoteTitle);
    }
}

function renderArchiveNotes() {
  let archiveNotesRef = document.getElementById("notes-archive-container");
  archiveNotesRef.innerHTML = "";
  for (let indexArchiveNote = 0;indexArchiveNote < notesArchive.length;indexArchiveNote++) 
    {
    archiveNotesRef.innerHTML += getArchiveNotesTemplate(indexArchiveNote);
    }
}

function renderArchiveNotesTitles() {
  let archiveNotesTitlesRef = document.getElementById("notes-archive-container");
  archiveNotesTitlesRef.innerHTML = "";
  for (let indexArchiveNoteTitle = 0; indexArchiveNoteTitle < notesArchive.length;indexArchiveNoteTitle++) 
    {
    archiveNotesTitlesRef.innerHTML += getArchiveNotesTemplate(indexArchiveNoteTitle);
    }
}

function addNote(indexNote) {
  let noteContentRef = document.getElementById("note-content");
  let noteTitleRef = document.getElementById("note-title");
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
  localStorage.setItem("trash", JSON.stringify(trash));
  localStorage.setItem("notesTitlesTrash", JSON.stringify(notesTitlesTrash));
  localStorage.setItem("notesArchive", JSON.stringify(notesArchive));
  localStorage.setItem("notesTitlesArchive", JSON.stringify(notesTitlesArchive));
}

function getFromLocalStorage() {
  notes = JSON.parse(localStorage.getItem("notes")) || [];
  notesTitles = JSON.parse(localStorage.getItem("notesTitles")) || [];
  trash = JSON.parse(localStorage.getItem("trash")) || [];
  notesTitlesTrash = JSON.parse(localStorage.getItem("notesTitlesTrash")) || [];
  notesArchive = JSON.parse(localStorage.getItem("notesArchive")) || [];
  notesTitlesArchive  = JSON.parse(localStorage.getItem("notesTitlesArchive")) || [];
}

function emtyTrash(indexTrashNote) {
/*   let closeRef = document.getElementById("my-modal"); */
  trash.splice(indexTrashNote, 1);
  notesTitlesTrash.splice(indexTrashNote, 1);
  localStorage.removeItem("trash");
  localStorage.removeItem("notesTitlesTrash");
/*   closeRef.classList.add("close"); */
  renderAll();
}

function addToTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1);
  trash.push(trashNote[0]);
  let trashNoteTitles = notesTitles.splice(indexNote, 1);
  notesTitlesTrash.push(trashNoteTitles[0]);
/*   let toggleRef = document.getElementById("my-modal");
  toggleRef.classList.toggle("close"); */
  renderAll();
}

function addToArchive(indexNote) {
  let archiveNote = notes.splice(indexNote, 1);
  notesArchive.push(archiveNote[0]);
  let archiveNoteTitles = notesTitles.splice(indexNote, 1);
  notesTitlesArchive.push(archiveNoteTitles[0]);
  saveToLocalStorage();
  renderArchiveNotes();
  renderArchiveNotesTitles();
  renderNotes();
}

function deleteArchiveNote(indexArchiveNote) {
  notesArchive .splice(indexArchiveNote, 1);
  notesTitlesArchive .splice(indexArchiveNote, 1);
  localStorage.removeItem("notesArchive");
  localStorage.removeItem("notesTitlesArchive");
  saveToLocalStorage();
  renderArchiveNotes();
  renderArchiveNotesTitles();
  renderNotes();
}

function archiveToNotes(indexArchiveNote) {
  let archiveToNote = notesArchive .splice(indexArchiveNote, 1);
  notes.push(archiveToNote[0]);
  let archiveToNoteTitles = notesTitlesArchive.splice(indexArchiveNote, 1);
  notesTitles.push(archiveToNoteTitles[0]);
renderAll();
}
function archiveToTrash(indexArchiveNote) {
  let archiveToTrash = notesArchive .splice(indexArchiveNote, 1);
  trash.push(archiveToTrash[0]);
  let archiveTotrashTitles = notesTitlesArchive.splice(indexArchiveNote, 1);
  notesTitlesTrash.push(archiveTotrashTitles[0]);
renderAll();
}

function trashToNotes(indexTrashNote) {
/*   let closeRef = document.getElementById("my-modal"); */
  let trashToNote = trash .splice(indexTrashNote, 1);
  notes.push(trashToNote[0]);
  let trashToNoteTitles = notesTitlesTrash.splice(indexTrashNote, 1);
  notesTitles.push(trashToNoteTitles[0]);
/*   closeRef.classList.add("close"); */
renderAll();
}

function modalOverlay(event) {
  let toggleRef = document.getElementById("my-modal");
  toggleRef.classList.toggle("close");
}
