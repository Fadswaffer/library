let myLibrary = [];

// Object constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Func for adding new book in array
function addToLibrary(title, author, pages, read) {
  book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayLibrary() {
  const books = document.querySelector(".books");

  myLibrary.forEach((myLibrary) => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);
    for (let key in myLibrary) {
      console.log(`${key}: ${myLibrary[key]}`);
      const para = document.createElement("p");
      para.textContent = `${key}: ${myLibrary[key]}`;
      card.appendChild(para);
    }
  });
}

// Test Data

addToLibrary("The Hobbit", "J.R.R. Tolkein", "543 Pages", "Read");
addToLibrary("sdadsd", "Jsdd.R. butt", "5423 Pages", "Not-Read");
addToLibrary("The Chowder", "Fadswaffer", "543323 Pages", "Not-Red");
addToLibrary("The Bobbins", "Jose the Manly Man", "43 Pages", "Red");
addToLibrary("The Cat-burger", "Fk.SHame", "543 Pages", "Not-rED");
console.log(myLibrary);

displayLibrary();
