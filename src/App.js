import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import PostDetails from './components/PostDetails/PostDetails';
import Comment from './components/Comment/Comment';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/post/comments/:id">
          <PostDetails></PostDetails>
            <Comment></Comment>
          </Route>
          <Route path="/post/:id">
            <PostDetails></PostDetails>
          </Route>
          <Route path="/post">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
