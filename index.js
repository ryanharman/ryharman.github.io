// Provides animation when items come into view for the site
const animateHTML = function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in-element');
        element.classList.remove('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
};


// For collecting book image, title and link using Google Books API
function getBooks() {
  const bookIds = getBookIds();
  // console.log(bookIds);

  // Iterates over the Id's returned to return book information
  bookIds.forEach(bookId => {
    fetchBookData(bookId)
    .then(bookData => bookData.json())
    .then(addBook)
  });
}

function getBookIds() {
  const findBooks = document.getElementsByClassName('book');
  // console.log(findBooks);
  let values = [];
  // Loop returns the book ID stored in the element
  for (let item of findBooks) {
    values.push(item.dataset.bookId);
  }
  return values;
};

function fetchBookData(bookId) {
  return fetch('https://www.googleapis.com/books/v1/volumes/' + bookId)
  // .then(data => {return data.json()})
  // .then(res=>{console.log(res)})
};

function secureImageLink(bookData) {
  return bookData.volumeInfo.imageLinks.thumbnail.replace("http", "https");
};

function addBook(bookData) {
  // console.log(bookData);
  const el = document.querySelectorAll('*[data-book-id="' + bookData.id + '"]');
  // console.log(el);
  el[0].outerHTML = '<div data-book-id="' + bookData.id + '" class="book"><a target="blank" href="' + bookData.volumeInfo.infoLink + '"><img src="' + secureImageLink(bookData) + '" alt="' + bookData.volumeInfo.title + '"></a></div>';
  // console.log(bookData);
};


// Function to reassign "Hello, my name is"
$(document).ready(function(){
$(function () {
    count = 0;
    wordsArray = ["Bonjour, je m'appelle", "Hola, mi nombre es", "Hallo ich heisse", "Ciao il mio nome è", "Hello, my name is"];
    setInterval(function () {
      count++;
      $("#word").fadeOut(400, function () {
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
      });
    }, 10000);
  });
});