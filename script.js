const myLibrary = [];

function Book(title,author, pages, read) { // Book Constructor
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title,
    this.author = author;
    this.pages = pages,
    this.read = read;
    this.id = crypto.randomUUID(),
    this.info = function() {
        if (this.read == false) {
            console.log(`${title} by ${author}, ${pages} pages, not read`);
        }
        else {
            console.log(`${title} by ${author}, ${pages} pages, read`);
        }
        
    };
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}




addBookToLibrary("Book 1", "me", "20", true);
addBookToLibrary("Book 2", "you", "19", false);

for (x in myLibrary) {
    myLibrary[x].info();
}