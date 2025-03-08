let notes = [];
let notesTitle = [];

function addNote(){
    let noteInputRef = document.getElementById('note-input');
    let noteInput = noteInputRef.value;
    let noteTitleRef = document.getElementById('note-title');
    let noteTitleInput = noteTitleRef.value;
    notes.push(noteInput);
    notesTitle.push(noteTitleInput);
    
    rendererNotes();
    noteInputRef.value = "";
    noteTitleRef.value = "";
    }

function rendererNotes(notes){
let contentRef = document.getElementById('note-content');
    contentRef.innerHTML = "";
    let contentTitleRef = document.getElementById('note-header');
    contentTitleRef.innerHTML = ""; 
     
for (let notesIndex = 0; notesIndex < notes.length; notesIndex++) {
    const note = notes[notesIndex];
   contentRef.innerHTML += getNotesHtml(notes); 

}
}

function getNotesHtml(notes) {
    let notesHeaderTitle = document.getElementById('note-header');
    notesHeaderTitle.innerHTML = notesTitle[index];
    document.getElementById('note-content');
   return `
   <p>${notes}</p>`
}