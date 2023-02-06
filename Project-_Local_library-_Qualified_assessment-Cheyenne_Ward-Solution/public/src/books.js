function findAuthorById(authors, id) {
  const authorMatch = authors.find((authors) => authors.id === id);
  return authorMatch;
}

function findBookById(books, id) {
  const bookMatch = books.find((books) => books.id === id);
  return bookMatch;
}

function partitionBooksByBorrowedStatus(books){
const borrowedBooks = books.filter((book) => book.borrows[0].returned === false);
const returnedBooks = books.filter((book) => book.borrows[0].returned === true);
return [borrowedBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
return book.borrows.map((borrow) => {
const account = accounts.find(account => account.id === borrow.id)
account.returned = borrow.returned
return account
}) .slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
