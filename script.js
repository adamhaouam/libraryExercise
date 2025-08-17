"use strict"

const gridBox = document.querySelector(".grid");
const dialog = document.querySelector("dialog");
const dialogClose = dialog.querySelector(".close");
const dialogSave = dialog.querySelector(".save");
const titleInput = dialog.querySelector("#title");
const authorInput = dialog.querySelector("#author");
const pageInput = dialog.querySelector("#pages");
const readInput = dialog.querySelector("#read");
const newBook = document.querySelector(".newBook");

const myLibrary = [];

function Book(title,author, pages, read) { // Book Constructor
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
        if (read == "on") {
            this.read = true;
        }
        else {
            this.read = false;
        };
    this.title = title,
    this.author = author;
    this.pages = pages,
    this.read = read;
    this.id = crypto.randomUUID(),
    this.info = function() {
        if (this.read == false) {
            return (`${title} by ${author}, ${pages} pages, not read`);
        }
        else {
            return (`${title} by ${author}, ${pages} pages, read`);
        }
    };
}

function addBookToLibrary(title, author, pages, read) { //Add book to library array
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function updateShelf()  { //Update gridBox to match myLibrary array
    for (let x in myLibrary) { //Create books in grid
        const div = document.createElement("div");
        div.dataset.idNo = myLibrary[x].id;
        div.classList.add("book");
        //div.textContent = myLibrary[x].info();

        const titleDisplay = document.createElement("h1");
        titleDisplay.textContent = myLibrary[x].title;
        div.appendChild(titleDisplay);

        const authorDisplay = document.createElement("h2");
        authorDisplay.textContent = `by ${myLibrary[x].author}`;
        div.appendChild(authorDisplay);

        const pagesDisplay = document.createElement("h3");
        pagesDisplay.textContent = `${myLibrary[x].pages} pages`;
        div.appendChild(pagesDisplay);

        const readDisplay = document.createElement("h4");
        if (myLibrary[x].read == true) {
            readDisplay.textContent = "Read";
            readDisplay.classList.add("readLabel");
        }
        else {
            readDisplay.textContent = "Not Read";
            readDisplay.classList.add("notReadLabel");
        }
        div.appendChild(readDisplay);

        const btn = document.createElement("button"); //Add remove button to each book
        btn.textContent = "Remove";
        btn.addEventListener("click", () => {
            //console.log("Deleted!");
            //match id to array and remove
            deleteBook(div.dataset.idNo);
            btn.parentElement.remove();
        });
        div.appendChild(btn);
        gridBox.appendChild(div);
    }
}

function deleteBook(id) { //Delete book from myLibrary array with ID provided
    for (let x in myLibrary) {
        if (id == myLibrary[x].id) {
            myLibrary.splice(x, 1);
        }
    }
}

dialogClose.addEventListener("click", () => {
    event.preventDefault();
    dialog.close();
});

dialogSave.addEventListener("click", () => {
    event.preventDefault();
    addBookToLibrary(titleInput.value, authorInput.value, pageInput.value, readInput.checked);
    gridBox.replaceChildren();
    updateShelf();
    dialog.close();
});

newBook.addEventListener("click", () => {
    dialog.showModal();
    titleInput.value = "";
    authorInput.value = "";
    pageInput.value = "";
    readInput.checked = false;
});

addBookToLibrary("Book 1", "me", "20", true);
addBookToLibrary("Book 2", "you", "19", false);
updateShelf();