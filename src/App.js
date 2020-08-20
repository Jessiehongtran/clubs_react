import React from 'react';
import Clubs from './components/clubs';
import Feed from './components/feed';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route
        exact path = "/"
        render={
          props => {
            return (
              <Clubs props={props}/>
            )
          }
        } 
      />
      <Route
        exact path = "/:clubName"
        render={
          props => {
            return (
              <Feed props={props}/>
            )
          }
        } 
      />
      
    </div>
  );
}

export default App;
