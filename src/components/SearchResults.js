import React from 'react'
import Book from './Book'

const SearchResults = ({ bookIds }) => (
  <div className="search-books-results">
    <ol className="books-grid">
      {
        bookIds.map(bookId => (
          <li key={bookId}>
            <Book
              bookId={bookId}
              onShelfChange={this.props.onShelfChange}
            />
          </li>
        ))
      }
    </ol>
  </div>
)

export default SearchResults
