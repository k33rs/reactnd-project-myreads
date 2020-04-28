import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const SearchResults = ({ bookids, onShelfChange }) => (
  <div className="search-books-results">
    <ol className="books-grid">
      {
        bookids.map(bookid => (
          <li key={bookid}>
            <Book
              id={bookid}
              onShelfChange={onShelfChange}
            />
          </li>
        ))
      }
    </ol>
  </div>
)

SearchResults.propTypes = {
  bookids: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default SearchResults
