import React from 'react'
import './App.css'
import Library from './components/Library'
import Search from './components/Search'
import { Route } from 'react-router-dom'

const BooksApp = () => (
  <div className="app">
    <Route exact path='/'>
      <Library />
    </Route>
    <Route path='/search'>
      <Search />
    </Route>
  </div>
)

export default BooksApp
