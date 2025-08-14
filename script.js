const myLibrary = [];

function Book(title,author, pages) { // the constructor...
    this.title = title,
    this.author = author;
    this.pages = pages,
    this.read = false;
    this.id = crypto.randomUUID(),
    this.info = function() {
        console.log(`${title} by ${author}, ${pages} pages`);
    };

    
    // this.sayName = function() {
    //     console.log(this.name);
    // };
}

function addBookToLibrary(title, author, pages) {
    let book = new Book(title, author, pages);
    myLibrary.push(book);

  // take params, create a book then store it in the array
}




addBookToLibrary("Book 1", "me", "20");
addBookToLibrary("Book 2", "you", "19");

for (x in myLibrary) {
    console.log(myLibrary[x]);
    myLibrary[x].info();
}