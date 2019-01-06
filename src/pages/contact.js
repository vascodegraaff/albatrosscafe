import React, { Component } from 'react';
import Navbar from '../components/navbar';

class Contact extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <section className="hero is-info is-medium">
          <div className="hero-image" id="aboutpage-hero">
            <div className="hero-body" />
          </div>
        </section>
        <section className="hero">
          <div className="hero-body" >
            <div className="container flex justify-between">
              <div>
                <h1 className="title black">
                  For further inquieries please contact
                </h1>
                <a className="title black" href="mailto:rdg_albatross@yahoo.com">rdg_albatross@yahoo.com</a>
              </div>
              {/* <span>
                <i class="fab fa-instagram" style={{ fontSize: "3rem" }} />
              </span> */}
            </div>
          </div>
        </section>
        <section className="footer is-black" style={{padding:"1.5rem 1.5rem", backgroundColor: '#303030'}}>
          <h3 style={{textAlign:'center', fontSize:'1.4rem'}}>{("< /> by ")}<a className="footer-name" href="https://vascodegraaff.com/" target="_blank" rel="noopener noreferrer">Vasco de Graaff</a>
          </h3>

        </section>
      </div>
    )
  }
}

export default Contact;
