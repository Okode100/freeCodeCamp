// 1. Define the sortByYear function
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

// 2. Define the books array with at least three objects
const books = [
  {
    title: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    releaseYear: 1925
  },
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949
  },
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 1960
  }
];

// 3. Filter out books released after 1950
const filteredBooks = books.filter(book => book.releaseYear <= 1950);

// 4. Sort the filteredBooks array in ascending order using sortByYear
filteredBooks.sort(sortByYear);

// Optional: Log to verify
console.log(filteredBooks);
