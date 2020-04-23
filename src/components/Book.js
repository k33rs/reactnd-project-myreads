import React from 'react'
import PropTypes from 'prop-types'
import BookshelfChanger from './BookshelfChanger'
import * as BooksAPI from '../BooksAPI'

class Book extends React.Component {
  controller = new AbortController()
  state = {
    title: '',
    authors: [],
    imageLinks: {
      thumbnail: ''
    },
    shelf: ''
  }

  onShelfChange = (shelf) => {
    this.props.onShelfChange(this.props.id, shelf)
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

  componentDidMount () {
    BooksAPI.get(this.props.id, this.controller.signal)
      .then(({
        title,
        authors,
        imageLinks: {
          thumbnail
        },
        shelf
      }) => {
        this.setState({
          title,
          authors,
          imageLinks: {
            thumbnail
          },
          shelf
        })
      })
      .catch(err => {
        console.log('Book.componentDidMount', err)
      })
  }

  componentWillUnmount () {
    this.controller.abort()
  }
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default Book
