
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

function getNotesTemplate(indexNote) {
    return `
        <details class="p-6 border my-4 border-transparent open:border-black/10 open:bg-gray-100 open:rounded-xl ...">
        <summary class="flex justify-between hover:cursor-pointer text-sm leading-6 font-semibold text-gray-900 select-none">
            <h3 id="note-header" class="text-2xl text-gray-600 flex">${notesTitles[indexNote]}</h3><button id="add-to-trash" class="py-1 border-2 border-gray-300 rounded-xl px-2 hover:bg-gray-300" onclick="addToTrash(${indexNote})">in den Papierkorb</button></summary>
        <div id="notes-list" class="mt-3 text-sm leading-6 text-gray-600">
            <p>${notes[indexNote]} </p>
        </div>
        </details>`
}
 function getTrashNotesTemplate(indexTrashNote) {
    return `<div class="grid grid-cols-2 w-full"> <span>+ ${notesTitlesTrash[indexTrashNote]} - ${trash[indexTrashNote]}</span> <button class="py-1 border-2 border-gray-300 rounded-xl px-2 hover:cursor-pointer hover:bg-gray-300" onclick="emtyTrash(${indexTrashNote})"> delete </button></div>`
}

function modalOverlay(event){
    let toggleRef = document.getElementById('my-modal')
    toggleRef.classList.toggle('close');
}
