import React from 'react'
import PropTypes from 'prop-types'

class SearchInput extends React.Component {
  state = {
    value: ''
  }

  onSearchInput = (event) => {
    const {
      target: {
        value
      }
    } = event
    this.setState({ value })
    this.props.onSearchInput(value)
  }

  render = () => (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title or author"
        value={this.state.value}
        onChange={this.onSearchInput}
      />
    </div>
  )
}

SearchInput.propTypes = {
  onSearchInput: PropTypes.func.isRequired
}

export default SearchInput
