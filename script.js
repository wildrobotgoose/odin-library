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

function clearDisplay() {
    const display = document.querySelector(".display");
    display.replaceChildren();
}

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

const newBookBtn = document.querySelector(".new-book");
newBookBtn.addEventListener("click", () => {
    const newBookForm = document.createElement("div");

    const titleField = document.createElement("input");
    titleField.setAttribute("type", "text");
    titleField.setAttribute("id", "new-book-title");
    titleField.setAttribute("name", "new-book-title");
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "new-book-title");
    titleLabel.textContent = "Title: ";

    const authorField = document.createElement("input");
    authorField.setAttribute("type", "text");
    authorField.setAttribute("id", "new-book-author");
    authorField.setAttribute("name", "new-book-author");
    const authorLabel = document.createElement("label");
    authorLabel.setAttribute("for", "new-book-author");
    authorLabel.textContent = "Author: ";

    const pagesField = document.createElement("input");
    pagesField.setAttribute("type", "number");
    pagesField.setAttribute("id", "new-book-pages");
    pagesField.setAttribute("name", "new-book-pages");
    const pagesLabel = document.createElement("label");
    pagesLabel.setAttribute("for", "new-book-pages");
    pagesLabel.textContent = "Number of pages: ";
    newBookForm.append(titleLabel, titleField, authorLabel, authorField,
                       pagesLabel, pagesField);

    const readRadioBtn = document.createElement("input");
    readRadioBtn.setAttribute("type", "radio");
    readRadioBtn.setAttribute("id", "new-book-read");
    readRadioBtn.setAttribute("name", "new-book-read-status");
    readRadioBtn.setAttribute("checked", "");
    const readLabel = document.createElement("label");
    readLabel.setAttribute("for", "new-book-read");
    readLabel.textContent = "Read";

    const notReadRadioBtn = document.createElement("input");
    notReadRadioBtn.setAttribute("type", "radio");
    notReadRadioBtn.setAttribute("id", "new-book-not-read");
    notReadRadioBtn.setAttribute("name", "new-book-read-status");
    const notReadLabel = document.createElement("label");
    notReadLabel.setAttribute("for", "new-book-not-read");
    notReadLabel.textContent = "Not read";

    const addBookBtn = document.createElement("button");
    addBookBtn.setAttribute("class", "add-book");
    addBookBtn.textContent = "Add";
    addBookBtn.addEventListener("click", () => {
        const book = new Book(titleField.value, authorField.value,
            parseInt(pagesField.value), readRadioBtn.checked);
        myLibrary.push(book);
        clearDisplay();
        displayBooks();
    });

    newBookForm.append(titleLabel, titleField, authorLabel, authorField,
        pagesLabel, pagesField, readRadioBtn, readLabel, notReadRadioBtn,
        notReadLabel, addBookBtn);

    newBookBtn.insertAdjacentElement("afterend", newBookForm);
});
