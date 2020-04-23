import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends React.Component {
  controller = new AbortController()
  state = {
    bookids: []
  }

  onSearchInput = (value) => {
    BooksAPI.search(value, this.controller.signal)
      .then(books => {
        this.setState({
          bookids: books instanceof Array
            ? books.map(book => book.id)
            : []
        })
      })
      .catch(err => {
        console.log(`SearchBooks.onSearchInput(${value})`, err)
      })
  }

  onShelfChange = (id, shelf) => {
    BooksAPI.update({ id }, shelf, this.controller.signal)
      .catch(err => {
        console.log(`SearchBooks.onShelfChange(${id}, ${shelf})`, err)
      })
  }

  render () {
    return (
      <div className="search-books">
        <SearchBar onSearchInput={this.onSearchInput} />
        <SearchResults
          bookids={this.state.bookids}
          onShelfChange={this.onShelfChange}
        />
      </div>
    )
  }

  componentWillUnmount () {
    this.controller.abort()
  }
}

export default SearchBooks
