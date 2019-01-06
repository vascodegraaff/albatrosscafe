import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Menu from './pages/menu'
import Contact from './pages/contact'
import './css/index.css'



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  };
}

export default App
