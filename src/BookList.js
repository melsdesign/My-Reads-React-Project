import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelf from "./BookShelf";


class BookList extends React.Component {
  state = {};

  //Filters the books depending on the category
  updateShelf = (bookId, event) => {
    //gets the books on shelf from the app
    let currentBooks = this.props.currentBooks;
    const book = currentBooks.filter(book => book.id === bookId)[0];
    book.shelf = event.target.value;
    BooksAPI.update(book, event.target.value).then(response => {
      this.setState({
        books: currentBooks
      });
    });
  };
  //Returns the books list and isplaya the  shelves in main pages with the selected books*/
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        {}
          <BookShelf
            key="currently"
            books={this.props.currentBooks.filter(book => book.shelf === "currentlyReading")}
            updateShelf={this.updateShelf}
            shelfTitle="Currently Reading"
          />
          <BookShelf
            key="wantToRead"
            books={this.props.currentBooks.filter(book => book.shelf === "wantToRead")}
            updateShelf={this.updateShelf}
            shelfTitle="Want to Read"
          />
          <BookShelf
            key="read"
            books={this.props.currentBooks.filter(book => book.shelf === "read")}
            updateShelf={this.updateShelf}
            shelfTitle="Read"
          />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}
export default BookList;