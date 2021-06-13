import './App.css';
import { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './containers/Main'
import Welcome from './containers/Welcome'
import PostContainer from './containers/PostContainer'
import NavHeader from './containers/NavHeader'
import ErrorHandler from './ErrorHandler'

class App extends Component {

  render() { 
    return (
      <div className="App">
        <NavHeader />
        <ErrorHandler />
        <Router>
          <Route exact path="/home" component={Main} />
          <Route exact path="/posts/:post_id" component={PostContainer} />
          <Route exact path="/" component={Welcome} />
        </Router>
      </div>
    );
  }
}

export default App