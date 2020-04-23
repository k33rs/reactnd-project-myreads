import React from 'react'
import Bookshelf from './Bookshelf'
import PropTypes from 'prop-types'

const ListBookshelves = ({
  bookshelves: {
    currentlyReading,
    wantToRead,
    read
  },
  onShelfChange
}) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <Bookshelf
          title="Currently Reading"
          bookIds={currentlyReading}
          onShelfChange={onShelfChange}
        />
        <Bookshelf
          title="Want to Read"
          bookIds={wantToRead}
          onShelfChange={onShelfChange}
        />
        <Bookshelf
          title="Read"
          bookIds={read}
          onShelfChange={onShelfChange}
        />
      </div>
    </div>
    <div className="open-search">
      <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
    </div>
  </div>
)

ListBookshelves.propTypes = {
  bookshelves: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default ListBookshelves
