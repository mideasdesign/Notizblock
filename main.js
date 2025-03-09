let notes = [];
let notesTitle = [];

function addNote(){
    let noteInputRef = document.getElementById('note-input');
    let noteInput = noteInputRef.value;
    let noteTitleRef = document.getElementById('note-title');
    let noteTitleInput = noteTitleRef.value;
    notes.push(noteInput);
    notesTitle.push(noteTitleInput);
    
    renderNotes();
    noteInputRef.value = "";
    noteTitleRef.value = "";
    }

function renderNotes(notes){
let contentRef = document.getElementById('note-content');
    contentRef.innerHTML = "";
    let contentTitleRef = document.getElementById('note-header');
    contentTitleRef.innerHTML = ""; 
     
for (let notesIndex = 0; notesIndex < notes.length; notesIndex++) {
   contentRef.innerHTML += getNotesHtml(notes); 

}
}

function getNotesHtml(notes) {
    let notesHeaderTitle = document.getElementById('note-header');
    notesHeaderTitle.innerHTML = notesTitle;
    document.getElementById('note-content');
   return `
   <p>${notes}</p>`
}