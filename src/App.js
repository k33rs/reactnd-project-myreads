import React from 'react'
import './App.css'
import Library from './components/Library'
import SearchBooks from './components/SearchBooks'
import { Route } from 'react-router-dom'

const BooksApp = () => (
  <div className="app">
    <Route exact path='/'>
      <Library />
    </Route>
    <Route path='/search'>
      <SearchBooks />
    </Route>
  </div>
)

export default BooksApp
