import React from 'react'
import PropTypes from 'prop-types'
import ShelfTypes from '../utils/ShelfTypes'

class BookshelfChanger extends React.Component {
  onShelfChange = (event) => {
    const {
      target: {
        value: shelf
      }
    } = event
    this.props.onShelfChange(shelf)
  }

  render () {
    return (
      <div className="book-shelf-changer">
        <select value={this.props.shelf} onChange={this.onShelfChange}>
          <option value="move" disabled>Move to...</option>
          <option value={ShelfTypes.CURRENTLY_READING}>Currently Reading</option>
          <option value={ShelfTypes.WANT_TO_READ}>Want to Read</option>
          <option value={ShelfTypes.READ}>Read</option>
          <option value={ShelfTypes.NONE}>None</option>
        </select>
      </div>
    )
  }
}

BookshelfChanger.propTypes = {
  shelf: PropTypes.string.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default BookshelfChanger
