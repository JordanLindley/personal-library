// DOM elements:
// const titleInput = document.querySelector('.title-input').value;
// const authorInput = document.querySelector('.author-input').value;
const libraryDisplay = document.querySelector('.library');
const addBookButton = document.querySelector('.add-book');

// book constructor
function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

function createBook() {
  let bookForm = document.createElement('div');
}

// library array to contain Books
let library = [];

// push created book to library
const addBook = newBook => library.push(newBook);

// placeholder books
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 304, false);
const handmaidsTale = new Book('The Handmaid\'s Tale', 'Margaret Atwood', 314, true);
addBook(theHobbit);
addBook(handmaidsTale);

// populate divs


addbookButton.addEventListener('click', createBook);