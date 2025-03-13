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
  renderTrashNotes();
  renderTrashNotesTitles();
  renderNotes();
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
  let trashNotesRef = document.getElementById("notes-trash");
  trashNotesRef.innerHTML = "";
  for (let indexTrashNote = 0; indexTrashNote < trash.length;indexTrashNote++) 
    {
    trashNotesRef.innerHTML += getTrashNotesTemplate(indexTrashNote);
    }
}

function renderTrashNotesTitles() {
  let trashNotesTitlesRef = document.getElementById("notes-trash");
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
  localStorage.setItem("notesArchive", JSON.stringify(notesArchive));
  localStorage.setItem("notesTitlesArchive", JSON.stringify(notesTitlesArchive));
}

function getFromLocalStorage() {
  let notesList = JSON.parse(localStorage.getItem("notes"));
  let notesListTitles = JSON.parse(localStorage.getItem("notesTitles"));
  let notesListArchive = JSON.parse(localStorage.getItem("notesArchive"));
  let notesListArchiveTitles = JSON.parse(localStorage.getItem("notesTitlesArchive"));

  if (notesList == null || notesArchive == null) {
    document.getElementById("notes-list").innerHTML += "No notes";
  } else {
    notes = notesList;
    notesTitles = notesListTitles;
    notesListArchive = notesArchive;
    notesListArchiveTitles = notesTitlesArchive;
    }
}

function emtyTrash(indexTrashNote) {
  trash.splice(indexTrashNote, 1);
  localStorage.removeItem("notes");
  localStorage.removeItem("notesTitles");
  saveToLocalStorage();
renderAll();
}

function addToTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1);
  trash.push(trashNote[0]);
  let trashNoteTitles = notesTitles.splice(indexNote, 1);
  notesTitlesTrash.push(trashNoteTitles[0]);
/*   console.log(trash,trashNoteTitles); */
  let toggleRef = document.getElementById("my-modal");
  toggleRef.classList.toggle("close");
  renderTrashNotes();  
  renderTrashNotesTitles();
  renderNotes();
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

function modalOverlay(event) {
  let toggleRef = document.getElementById("my-modal");
  toggleRef.classList.toggle("close");
}
