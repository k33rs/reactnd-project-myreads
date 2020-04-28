import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import SearchInput from './SearchInput'

const SearchBar = ({ onSearchInput }) => (
  <div className="search-books-bar">
    <Link to='/'>
      <button className="close-search">Close</button>
    </Link>
    <SearchInput onSearchInput={onSearchInput} />
  </div>
)

SearchBar.propTypes = {
  onSearchInput: PropTypes.func.isRequired
}

export default SearchBar
