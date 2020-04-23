import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const Bookshelf = ({
  title,
  bookIds,
  onShelfChange
}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{ title }</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {
          bookIds.map(bookId => (
            <li key={bookId}>
              <Book bookId={bookId} onShelfChange={onShelfChange} />
            </li>
          ))
        }
      </ol>
    </div>
  </div>
)

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  bookIds: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default Bookshelf
