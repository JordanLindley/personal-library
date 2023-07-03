// DOM elements:
// const titleInput = document.querySelector('.title-input').value;
// const authorInput = document.querySelector('.author-input').value;
const libraryDisplay = document.getElementById('library');
const addBookButton = document.querySelector('.new-book');
const createBookBox = document.querySelector('.create-book');
const cancelBookButton = document.querySelector('.cancel-btn');

const randomID = () => {"id" + Math.random().toString(16).slice(2)}

// book constructor
function Book(id, title, author, pages, haveRead) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

// library array to contain Books
let library = [];

// push created book to library
const addBook = newBook => library.push(newBook);

// placeholder books
const theHobbit = new Book(randomID(), 'The Hobbit', 'J.R.R. Tolkien', 304, false);
const handmaidsTale = new Book(randomID(), 'The Handmaid\'s Tale', 'Margaret Atwood', 314, true);
addBook(theHobbit);
addBook(handmaidsTale);

const openForm = () => {
  createBookBox.style.display = 'flex';
  createBookBox.style.flexDirection = 'column';
  addBookButton.style.display = 'none';
}
const closeForm = () => {
  createBookBox.style.display = 'none';
  addBookButton.style.display = 'block';
}

addBookButton.addEventListener('click', openForm);
cancelBookButton.addEventListener('click', closeForm);

function render() {
  const books = document.querySelectorAll('.book');
  books.forEach(book => libraryDisplay.removeChild(book));

  for (let i = 0; i < library.length; i++){
      displayBook(library[i]);
  }
}

function displayBook(index) {
  let book = document.createElement('div');
  let title = document.createElement('h1');
  let author = document.createElement('h2');
  let pages = document.createElement('h2');
  let readToggle = document.createElement('label');
  let readSwitch = document.createElement('input');
  let readRound = document.createElement('div');
  let deleteButton = document.createElement('button');
  
  // add class to divs
  book.className = 'book';
  title.className = 'book-title';
  author.className = 'book-author';
  pages.className = 'book-pages';
  readToggle.className = 'have-read';
  readSwitch.className = 'switch';
  readSwitch.setAttribute('type', 'checkbox');
  readRound.className = 'have-read-slider round';
  deleteButton.className = 'delete-book';
  book.setAttribute('id', `book-${index.id}`);
  
  // display text of book cards
  title.textContent = `${index.title}`;
  author.textContent = `By ${index.author}`;
  pages.textContent = `${index.pages} pages`;
  // need to fix, not behaving as expected with switch behavior
  readToggle.textContent = `${index.haveRead == true ? 'Mark as Unread' : 'Mark as Read'}`; 
  deleteButton.textContent = 'Delete';
  
  // append whole book card as div with children  
  libraryDisplay.appendChild(book);
  book.appendChild(title);
  book.appendChild(author);
  book.appendChild(pages);
  book.appendChild(readToggle);
  book.appendChild(deleteButton);
  readToggle.appendChild(readSwitch);
  readToggle.appendChild(readRound);

  deleteButton.addEventListener('click', () => {
    if (confirm('Delete book?')) {
      library.splice(library.indexOf(index), 1);
      render();
    }
    
})
}

render(); // call render() each time libary[] is updated.

// testing git.