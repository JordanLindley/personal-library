// DOM elements:
// const titleInput = document.querySelector('.title-input').value;
// const authorInput = document.querySelector('.author-input').value;
const libraryDisplay = document.querySelector('.library');
const addBookButton = document.querySelector('.add-book');

// book constructor
function Book(id, title, author, pages, haveRead) {
  this.id = id;
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
const theHobbit = new Book(0, 'The Hobbit', 'J.R.R. Tolkien', 304, false);
const handmaidsTale = new Book(1, 'The Handmaid\'s Tale', 'Margaret Atwood', 314, true);
addBook(theHobbit);
addBook(handmaidsTale);

// populate divs
function displayBooks() {
  for (let i = 0; i < library.length; i++) {
    let book = document.createElement('div');
    let title = document.createElement('h1');
    let author = document.createElement('h2');
    let pages = document.createElement('h2');
    let readToggle = document.createElement('label');
    let readSwitch;
    let readRound;
    
    // add class to divs
    book.className = 'book';
    title.className = 'book-title';
    author.className = 'book-author';
    pages.className = 'book-pages';
    readToggle.className = 'have-read';
    readSwitch.className = 'switch';
    readRound.className = 'have-read-round round'
    
    // display text of book cards
    title.textContent = `${library[i].title}`;
    author.textContent = `By ${library[i].author}`;
    pages.textContent = `${library[i].pages} pages`;
    read.textContent = `${library[i].haveRead == true ? 'Mark as Unread' : 'Mark as Read'}`;
    
    // append whole book card as div with children
    libraryDisplay.appendChild(book);
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);
  }
}
 
displayBooks();

addbookButton.addEventListener('click', createBook);