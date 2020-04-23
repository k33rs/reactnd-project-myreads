import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const Bookshelf = ({
  title,
  bookids,
  onShelfChange
}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{ title }</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {
          bookids.map(id => (
            <li key={id}>
              <Book
                id={id}
                onShelfChange={onShelfChange}
              />
            </li>
          ))
        }
      </ol>
    </div>
  </div>
)

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  bookids: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default Bookshelf
