import React from 'react'
import * as BooksAPI from '../BooksAPI'
import BookshelfChanger from './BookshelfChanger'
import PropTypes from 'prop-types'

class Book extends React.Component {
  state = {
    title: '',
    authors: '',
    imageLinks: {
      thumbnail: ''
    },
    shelf: ''
  }

  getStateFromSession = () => {
    const storedState = sessionStorage.getItem(this.props.bookId)
    return storedState
      ? JSON.parse(storedState)
      : storedState
  }

  setSessionState = state => {
    sessionStorage.setItem(this.props.bookId, JSON.stringify(state))
  }

  componentDidMount () {
    const localState = this.getStateFromSession()
    if (localState) {
      this.setState(localState)
      return
    }

    BooksAPI.get(this.props.bookId)
      .then(({
        title,
        authors,
        imageLinks: {
          thumbnail
        },
        shelf
      }) => {
        const newState = {
          title,
          authors,
          imageLinks: {
            thumbnail
          },
          shelf
        }
        this.setState(newState)
        this.setSessionState(newState)
      })
  }

  onShelfChange = shelf => {
    this.setSessionState({ ...this.state, shelf })
    this.props.onShelfChange(this.props.bookId, shelf)
  }

  render () {
    const {
      title,
      authors,
      imageLinks: {
        thumbnail
      },
      shelf
    } = this.state
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}
          ></div>
          <BookshelfChanger
            shelf={shelf}
            onShelfChange={this.onShelfChange}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.toString()}</div>
      </div>
    )
  }
}

Book.propTypes = {
  bookId: PropTypes.string.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default Book
