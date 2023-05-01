// DOM elements:
// const titleInput = document.querySelector('.title-input').value;
// const authorInput = document.querySelector('.author-input').value;
const libraryDisplay = document.querySelector('.library');
const addBookButton = document.querySelector('.add-book');
const createBookBox = document.querySelector('.create-book');

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
const theHobbit = new Book(0, 'The Hobbit', 'J.R.R. Tolkien', 304, false);
const handmaidsTale = new Book(1, 'The Handmaid\'s Tale', 'Margaret Atwood', 314, true);
addBook(theHobbit);
addBook(handmaidsTale);

// populate divs
function displayBooks() {
  for (let i = 0; i < library.length; i++) {
    let deleteBook = document.createElement('button').className('delete-book');
    let book = document.createElement('div');
    let title = document.createElement('h1');
    let author = document.createElement('h2');
    let pages = document.createElement('h2');
    let readToggle = document.createElement('label');
    let readSwitch = document.createElement('input');
    let readRound = document.createElement('div');
    
    // add class to divs
    book.className = 'book';
    title.className = 'book-title';
    author.className = 'book-author';
    pages.className = 'book-pages';
    readToggle.className = 'have-read';
    readSwitch.className = 'switch';
    readSwitch.setAttribute('type', 'checkbox');
    readRound.className = 'have-read-slider round';
    
    // display text of book cards
    title.textContent = `${library[i].title}`;
    author.textContent = `By ${library[i].author}`;
    pages.textContent = `${library[i].pages} pages`;
    deleteBook.textContent = `Delete`;
    
    // append whole book card as div with children  
    libraryDisplay.appendChild(book);
    book.appendChild(deleteBook);
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(readToggle);
    readToggle.appendChild(readSwitch);
    readToggle.appendChild(readRound);

    readSwitch.addEventListener('click', () => {
      if (readSwitch.getAttribute('value') == '1') {
        readToggle.textContent = 'Mark as unread';
      } else if (readSwitch.getAttribute('value') == '0') {
        readToggle.textContent = 'Mark as read';
      }
    })

      // tried to implement a delete button but nothing fucking works now.
    // function popBook(book) {
    //   const index = library.indexOf(book);
    //   library.splice(index, 1);
    // }

    // deleteBook.addEventListener('click', function() {
    //   popBook(library[i]);
    // })
  }
}
 
displayBooks();

function showBox() {
  if (createBookBox.style.display === 'none') {
    createBookBox.style.display = 'block';
  } else createBookBox.style.display = 'none';
}

addBookButton.addEventListener('click', showBox);
