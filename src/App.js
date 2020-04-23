import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBookshelves from './components/ListBookshelves'
import SearchBooks from './components/SearchBooks'
import ShelfTypes from './utils/ShelfTypes'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    bookshelves: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }

  componentDidMount () {
    BooksAPI.getAll()
      .then(books => {
        const filterBooks = shelf => books
          .filter(book => book.shelf === shelf)
          .map(book => book.id)

        this.setState({
          bookshelves: {
            currentlyReading: filterBooks(ShelfTypes.CURRENTLY_READING),
            wantToRead: filterBooks(ShelfTypes.WANT_TO_READ),
            read: filterBooks(ShelfTypes.READ)
          }
        })
      })
      .catch(console.log)
  }

  onShelfChange = (id, shelf) => {
    BooksAPI.update({ id }, shelf)
      .then(res => {
        this.setState({ bookshelves: res })
      })
      .catch(console.log)
  }

  render () {
    const { bookshelves, showSearchPage } = this.state
    return (
      <div className="app">
        {showSearchPage ? (
          <SearchBooks
            bookshelves={bookshelves}
            onShelfChange={this.onShelfChange}
          />
        ) : (
          <ListBookshelves
            bookshelves={bookshelves}
            onShelfChange={this.onShelfChange}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
