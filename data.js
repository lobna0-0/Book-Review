// بيانات الكتب
let books = {
  "9780001": {
    title: "Book One",
    author: "Author A",
    reviews: {
      user1: "Great book!",
      user2: "Nice read."
    }
  },
  "9780002": {
    title: "Book Two",
    author: "Author B",
    reviews: {}
  }
};

// بيانات المستخدمين
let users = {
  "user1": "pass1",
  "user2": "pass2"
};

module.exports = { books, users };
