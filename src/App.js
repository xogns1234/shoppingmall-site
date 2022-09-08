import './App.css';
import React, { Component } from 'react'
import Movie from './Movie'

class App extends Component {
  render(){
    return (
      <Movie 
        id="1234567890"
        title="해리포터"
        language="english"
        release="2013년 7월 19일"
        length="27345"
        author="조앤K롤링"
        production="sunrise"
      >
        <h3>자식요소 1</h3>
        <h3>자식요소 2</h3>
        <h3>자식요소 3</h3>
      </Movie>
    )
  }
  
}

export default App;