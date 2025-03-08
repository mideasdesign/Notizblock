let notes = [];

function addBook() {
    let notesList = document.getElementById(book-input);
    let bookListEntry = bookList.value;
   books.push(bookListEntry);
   renderBook();
   bookList.value = "";
}

function renderBook() {
    let bookRef = document.getElementById('book-list');
    bookRef.innerHTML = "";
    for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
        let book = books[indexBooks];
        bookRef.innerHTML += getNotesTemplate(indexBooks);
    }
}

function getNotesTemplate(book) {
    return `<p>${book}</p>`
}
