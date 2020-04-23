import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import * as BooksAPI from '../BooksAPI'
import ShelfTypes from '../utils/ShelfTypes'

class Library extends React.Component {
  controller = new AbortController()
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  onShelfChange = (id, shelf) => {
    BooksAPI.update({ id }, shelf, this.controller.signal)
      .then(res => this.setState({ ...res }))
      .catch(err => {
        console.log(`Library.onShelfChange(${id}, ${shelf})`, err)
      })
  }

  render () {
    const {
      currentlyReading, wantToRead, read
    } = this.state
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              title="Currently Reading"
              bookids={currentlyReading}
              onShelfChange={this.onShelfChange}
            />
            <Bookshelf
              title="Want to Read"
              bookids={wantToRead}
              onShelfChange={this.onShelfChange}
            />
            <Bookshelf
              title="Read"
              bookids={read}
              onShelfChange={this.onShelfChange}
            />
          </div>
        </div>
        <Link to='/search'>
          <div className="open-search">
            <button>Add a book</button>
          </div>
        </Link>
      </div>
    )
  }

  componentDidMount () {
    BooksAPI.getAll(this.controller.signal)
      .then(books => {
        const filterBooks = shelf => books
          .filter(book => book.shelf === shelf)
          .map(book => book.id)

        this.setState({
          currentlyReading: filterBooks(ShelfTypes.CURRENTLY_READING),
          wantToRead: filterBooks(ShelfTypes.WANT_TO_READ),
          read: filterBooks(ShelfTypes.READ)
        })
      })
      .catch(err => {
        console.log('Library.componentDidMount()', err)
      })
  }

  componentWillUnmount () {
    this.controller.abort()
  }
}

export default Library
