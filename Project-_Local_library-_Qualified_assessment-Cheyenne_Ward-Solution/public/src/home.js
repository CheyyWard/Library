function getTotalBooksCount(books){
  let bookCount = 0;;
  books.forEach(function (total) {
  bookCount +=1;
  });
  return bookCount;
  }
  
  function getTotalAccountsCount(accounts) {
    let totalAccounts = 0;
    accounts.forEach(function (account) {
      totalAccounts +=1;
    });
    return totalAccounts;
  }
  
  function getBooksBorrowedCount(books) {
    let result = books.filter((book) => book.borrows[0].returned === false );
    return result.length;
  }
  
  
  function getMostCommonGenres(books) {
    let result = []
    let genres = {}
    books.forEach((book) => {
      if (genres[book.genre]) {
        genres[book.genre]++
      } else {
        genres[book.genre] = 1;
      }
    })
    for (let genre in genres) {
      result.push({name: genre, count: genres[genre]})
    }
    return result.sort((genreA, genreB) => (genreA.count > genreB.count ? -1 : 1)).slice(0,5)
  }
  
  
  
  function getMostPopularBooks(books) {
    return books.map(book => {
      return {
        name: book.title,
        count: book.borrows.length
      }
    }).sort((bookA, bookB) => bookB.count - bookA.count).slice(0,5)
  }
  
  
  
  function getMostPopularAuthors(books, authors) {
     let result = []
     authors.forEach((author) => {
      let bookAuth = books.filter((book) => book.authorId === author.id)
      let bookAuthBorrows = bookAuth.reduce((borrowed, book) => borrowed + book.borrows.length, 0)
      result.push ({name: author.name.first + " " + author.name.last, count: bookAuthBorrows})
  
     })
     return result.sort((authorA, authorB) => (authorA.count < authorB.count ? 1 : -1)).slice(0,5)
  }
  
  
  module.exports = {
    getTotalBooksCount,
    getTotalAccountsCount,
    getBooksBorrowedCount,
    getMostCommonGenres,
    getMostPopularBooks,
    getMostPopularAuthors,
  };
  