let notes = ['banana', 'Erdbeere', 'apfel'];
let trash = [];
let notesTitles = ['title0', 'title1', 'title2'];
let notesTitlesTrash = [];

function renderNotes() {
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
function renderTrashNotesTitle() {
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
    return `
        <details class="p-6 border my-4 border-transparent open:border-black/10 open:bg-gray-100 open:rounded-xl ...">
        <summary class="flex justify-between hover:cursor-pointer text-sm leading-6 font-semibold text-gray-900 select-none">
            <h3 id="note-header" class="text-2xl text-gray-600 flex">${notesTitles[indexNote]}</h3><button class="py-1 border-2 border-gray-300 rounded-xl px-2" onclick="addToTrash(${indexNote})">in den Papierkorb</button></summary>
        <div id="notes-list" class="mt-3 text-sm leading-6 text-gray-600">
            <p>${notes[indexNote]} </p>
        </div>
        </details>
    `
}
 function getTrashNotesTemplate(indexTrashNote) {
    return `<p>+ ${trash[indexTrashNote]} <button onclick="emtyTrash(${indexTrashNote})">emty trash</button></p>`
}

function modalOverlay(event){
    let toggleRef = document.getElementById('my-modal')
    toggleRef.classList.toggle('close');
}
