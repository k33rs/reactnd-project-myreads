import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends React.Component {
  controller = new AbortController()
  state = {
    bookIds: []
  }

  onSearchInput = (value) => {
    BooksAPI.search(value, this.controller.signal)
      .then(books => {
        this.setState({
          bookIds: books instanceof Array
            ? books.map(book => book.id)
            : []
        })
      })
      .catch(err => {
        console.log(`SearchBooks.onSearchInput(${value})`, err)
      })
  }

  render () {
    return (
      <div className="search-books">
        <SearchBar onSearchInput={this.onSearchInput} />
        <SearchResults
          bookIds={this.state.bookIds}
          onShelfChange={this.props.onShelfChange}
        />
      </div>
    )
  }

  componentWillUnmount () {
    this.controller.abort()
  }
}

export default SearchBooks
