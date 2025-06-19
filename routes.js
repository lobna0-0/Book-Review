const express = require('express');
const router = express.Router();
const { books, users } = require('./data');

// Task 1: Get all books
router.get('/books', (req, res) => {
  res.json(books);
});

// Task 2: Get book by ISBN
router.get('/isbn/:isbn', (req, res) => {
  const book = books[req.params.isbn];
  res.json(book || { error: "Book not found" });
});

// Task 3: Get books by Author
router.get('/author/:author', (req, res) => {
  const result = Object.values(books).filter(book => book.author === req.params.author);
  res.json(result);
});

// Task 4: Get books by Title
router.get('/title/:title', (req, res) => {
  const result = Object.values(books).filter(book => book.title === req.params.title);
  res.json(result);
});

// Task 5: Get book review
router.get('/review/:isbn', (req, res) => {
  const book = books[req.params.isbn];
  res.json(book ? book.reviews : { error: "Book not found" });
});

// Task 6: Register New User
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (users[username]) {
    return res.status(400).json({ message: "User already exists" });
  }
  users[username] = password;
  res.json({ message: "User registered successfully" });
});

// Task 7: Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (users[username] === password) {
    return res.json({ message: "Login successful" });
  }
  res.status(401).json({ message: "Invalid credentials" });
});
// Task 8: Add/Modify a book review
router.put('/review/:isbn', (req, res) => {
  const { username, review } = req.body;
  const isbn = req.params.isbn;

  if (!books[isbn]) {
    return res.status(404).json({ message: "Book not found" });
  }

  books[isbn].reviews[username] = review;
  res.json({ message: "Review added/updated successfully" });
});

// Task 9: Delete a user's review
router.delete('/review/:isbn', (req, res) => {
  const { username } = req.body;
  const isbn = req.params.isbn;

  if (!books[isbn] || !books[isbn].reviews[username]) {
    return res.status(404).json({ message: "Review not found" });
  }

  delete books[isbn].reviews[username];
  res.json({ message: "Review deleted successfully" });
});
module.exports = router;
