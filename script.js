const myLibrary = [];

function Book(name) { // the constructor...
    this.name = name,
    this.sayName = function() {
        console.log(this.name);
    };
}

function addBookToLibrary(name) {
    let book = new Book(name);
    myLibrary.push(book);

  // take params, create a book then store it in the array
}

addBookToLibrary("Book 1");
addBookToLibrary("Book 2");

for (x in myLibrary) {
    //console.log(myLibrary[x].name);
    myLibrary[x].sayName();
}