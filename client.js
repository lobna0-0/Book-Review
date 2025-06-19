const axios = require('axios');
const BASE_URL = 'http://localhost:3000';

// Task 10: Get all books – Using async/await
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    console.log("All books:", response.data);
  } catch (error) {
    console.error(error.message);
  }
}

// Task 11: Search by ISBN – Using Promises
function getBookByISBN(isbn) {
  axios.get(`${BASE_URL}/isbn/${isbn}`)
    .then(response => console.log("Book by ISBN:", response.data))
    .catch(error => console.error(error.message));
}

// Task 12: Search by Author – Using async/await
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${BASE_URL}/author/${author}`);
    console.log("Books by Author:", response.data);
  } catch (error) {
    console.error(error.message);
  }
}

// Task 13: Search by Title – Using async/await
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`${BASE_URL}/title/${title}`);
    console.log("Books by Title:", response.data);
  } catch (error) {
    console.error(error.message);
  }
}

// Test all
getAllBooks();
getBookByISBN('9780001');
getBooksByAuthor('Author A');
getBooksByTitle('Book One');
