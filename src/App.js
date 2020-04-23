import React from 'react'
import './App.css'
import Library from './components/Library'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  render () {
    const { showSearchPage } = this.state
    return (
      <div className="app">
        {showSearchPage ? (
          <SearchBooks />
        ) : (
          <Library />
        )}
      </div>
    )
  }
}

export default BooksApp
