let notes = ['banana', 'Erdbeere', 'apfel'];


function renderNotes() {
    let notesRef = document.getElementById('notes-list');
    notesRef.innerHTML = "";
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        notesRef.innerHTML += getNotesTemplate(note); 
        
    }
}
function getNotesTemplate(note) {
    return `<p>+ ${note} </p>`
}