import React, { Component } from 'react'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggle (){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    console.log("isOpen", this.state.isOpen)
    const overlay = this.state.isOpen ? { visibility: 'visible', opacity: "1" }: null
    return (
      <div>
        <div className="overlay" style={overlay}>
          <button className="menu-close" onClick={()=> {this.toggle()}}>
            <i className="fas fa-times" style={{fontSize:'2rem'}}></i>
          </button>
          <div className="overlay-content" >
            <a className="navbar-item" href="/">Home</a>
            <a className="navbar-item" href="/menu">Menu</a>
            <a className="navbar-item" href="/about">About</a>
            <a className="navbar-item" href="/contact">Contact</a>
          </div>
        </div>
        <div className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img
                src={require("../resources/img/logo.png")}
                height="70px"
                width="70px"
                alt="logo"
              />
              <div className="navbar-item">Albatross Cafe</div>
            </a>

            <button
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              style={{marginRight:'15px'}}
              onClick={()=> {this.toggle()}}
            >
          <svg className="svg-inline--fa fa-bars fa-w-14" aria-hidden="true" data-fa-processed="" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{fontSize:'1.7rem'}}><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
            </button>
          </div>

          <div id="navbarBasicExample" class="navbar-menu ">
            <div className="navbar-end">
              <a className="navbar-item" href="/">Home</a>
              <a className="navbar-item" href="/menu">Menu</a>
              <a className="navbar-item" href="/about">About</a>
              <a className="navbar-item" href="/contact">Contact</a>
            </div>
          </div>
        </nav>
      </div>
      </div>
    )
  }
}

export default Navbar