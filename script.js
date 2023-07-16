// DOM elements:
// const titleInput = document.querySelector('.title-input').value;

// const authorInput = document.querySelector('.author-input').value;
const libraryDisplay = document.getElementById('library');
const addBookButton = document.querySelector('.new-book');
const createBookBox = document.querySelector('.create-book');
const cancelBookButton = document.querySelector('.cancel-btn');
const submitBookButton = document.querySelector('.submit-btn');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readCheck = document.getElementById('have-read');

const randomID = () => {return `id-${Math.floor(Math.random() * 10000).toString()}`}

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
const addBook = () => {
  event.preventDefault();

  newBook = new Book(
    randomID(), 
    titleInput.value, 
    authorInput.value, 
    pagesInput.value, 
    readCheck.checked
  )
  library.push(newBook);
  saveLocalStorage();
  render();
}

submitBookButton.addEventListener('click', addBook)

// placeholder books
const theHobbit = new Book(randomID(), 'The Hobbit', 'J.R.R. Tolkien', 304, false);
const handmaidsTale = new Book(randomID(), 'The Handmaid\'s Tale', 'Margaret Atwood', 314, true);

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
  let readButton = document.createElement('button');
  let deleteButton = document.createElement('button');
  
  // add class to divs
  book.className = 'book';
  title.className = 'book-title';
  author.className = 'book-author';
  pages.className = 'book-pages';
  readButton.className = 'read-btn';
  readButton.type = 'button';
  deleteButton.className = 'delete-book';
  book.setAttribute('id', `book-${index.id}`);
  
  // display text of book cards
  title.textContent = `${index.title}`;
  author.textContent = `By ${index.author}`;
  pages.textContent = `${index.pages} pages`;
  // need to fix, not behaving as expected with switch behavior
  if (index.haveRead == true) {
    readButton.style.backgroundColor = 'lightgreen' ;
    readButton.textContent = 'Read';
  } else {
    readButton.style.backgroundColor = 'var(--red-button)';
    readButton.textContent = 'Unread'; 
  }
  deleteButton.textContent = 'Delete';
  
  // append whole book card as div with children  
  libraryDisplay.appendChild(book);
  book.appendChild(title);
  book.appendChild(author);
  book.appendChild(pages);
  book.appendChild(readButton);
  book.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => {
    if (confirm('Delete book?')) {
      library.splice(library.indexOf(index), 1);
      saveLocalStorage();
      render();
    }
  })

  readButton.addEventListener('click', () => {
    if (index.haveRead == true) {
      index.haveRead = false;
      readButton.textContent = 'Unread';
      readButton.style.backgroundColor = 'var(--red-button)';
    } else {
      index.haveRead = true;
      readButton.textContent = 'Read';
      readButton.style.backgroundColor = 'lightgreen';
    }
  })

}

function saveLocalStorage() {
  localStorage.setItem(`library`, JSON.stringify(library));
}

function getLocalStorage() {
  if(!localStorage.myLibrary) {
      render();
  } else {
      let objects = localStorage.getItem('library');
      objects = JSON.parse(objects);
      library = objects;
      render();
  }
}

getLocalStorage();
render(); // call render() each time libary[] is updated.