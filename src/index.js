import React from 'react';
import ReactDom from 'react-dom';
import './style.css';
import MovieSearch from './movieSearch';


class Main extends React.Component{
  render(){
    return (
      <div className="container">
      <h1 className="title">MOVIE SEARCH</h1>
      <MovieSearch/>
     </div>
    );
  }
}

ReactDom.render(<Main/>,document.getElementById('root'));