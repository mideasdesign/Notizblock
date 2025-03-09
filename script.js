let notes = ['banana', 'Erdbeere', 'apfel'];
let readed = [];

function renderNotes() {
    let notesRef = document.getElementById('notes-list');
   notesRef.innerHTML = "";
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        notesRef.innerHTML += getNotesTemplate(indexNote);
    }
}

function addNote(indexNote) {
    let noteContentRef = document.getElementById('input-note');
    let noteInput = noteContentRef.value;     
    notes.push(noteInput);
    renderNotes();
    noteContentRef.value = "";
}

function deleteNote(indexNote) {
    notes.splice(indexNote, 1);
    renderNotes();
}

function getNotesTemplate(indexNote) {
    return `<p>+ ${notes[indexNote]} <button onclick="deleteNote(${indexNote})">X</button></p>`
}
