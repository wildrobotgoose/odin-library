const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.getInfo = function () {
        const readInfo = this.read ? "read" : "not read yet";
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readInfo}`;
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false);
const theAwesomeBook = new Book("The Awesome Book", "me", 1001, true);

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(theHobbit);
addBookToLibrary(theAwesomeBook);

function displayBooks() {
    const display = document.querySelector(".display");
    for (const book of myLibrary) {
        const bookDiv = document.createElement("div");
        bookDiv.style.width = "200px";
        bookDiv.style.height = "200px";
        bookDiv.style.border = "green solid 2px";
        bookDiv.textContent = book.getInfo();
        display.appendChild(bookDiv);
    }
}

displayBooks();