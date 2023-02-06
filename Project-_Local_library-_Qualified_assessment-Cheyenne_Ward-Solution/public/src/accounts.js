function findAccountById(accounts, id){
  const idMatch = accounts.find((account) => account.id === id)
  return idMatch;
  }
  
  function sortAccountsByLastName(accounts){
  accounts.sort((A,B) => A.name.last > B.name.last ? 1 : -1);
  return accounts;
  }
  
  function getTotalNumberOfBorrows(account, books) {
    const totalBorrows = books.filter((book) => {
      return book.borrows.some((bookId) => bookId.id === account.id)
    })
    return totalBorrows.length;
  }
  
  function getBooksPossessedByAccount(account, books, authors) {
  const booksOutNow = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id);
  const booksByAccount = booksOutNow.map ((book) => {
  const author = authors.find((author) => author.id === book.authorId);
  return {...book, author };
  });
  return booksByAccount;
  }
  
  module.exports = {
    findAccountById,
    sortAccountsByLastName,
    getTotalNumberOfBorrows,
    getBooksPossessedByAccount,
  };
  