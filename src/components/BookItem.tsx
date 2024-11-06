import React from 'react';
import './BookItem.css'
function BookItem({ title,author,year }) {
  return (
    <div className="book-item">
    <h2>{title}</h2>
    <p>Author: {author}</p>
    <p>Published: {year}</p>
  </div>
  );
}
export default BookItem;
