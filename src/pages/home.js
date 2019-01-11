import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Recommended from '../components/recommend';
/* import Reviews from '../components/reviews'; */
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar id="navbar" />
        <section
          className="hero is-info is-large "
          style={{ background: '#0000' }}
        >
          <div className="hero-image" id="home-hero">
            <div className="hero-body">
              <div className="container flex">
                <img
                  src={require('../resources/img/logo.png')}
                  alt="logo"
                  style={{
                    height: '120px',
                    width: '180px',
                    paddingRight: '30px'
                  }}
                  className="hero-logo"
                />
                <div className="hero-info">
                  <h1 className="title is-size-1 is-size-3-mobile">
                    Albatross Cafe Phuket
                  </h1>
                  <h2 className="subtitle is-size-3 is-size-5-mobile">
                    Thai, Seafood and International Cuisine by the water
                  </h2>
                  <h2 className="subtitle is-size-4 is-size-6-mobile">
                    Open daily from 9:30 to 22:30
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="recommend-section">
          <div className="container" style={{ marginBottom: '2.5rem' }}>
            <h2 className="title is-3">Recommended</h2>
          </div>
          <Recommended />
        </section>
        <section
          className="hero is-black is-medium flex "
          style={{ flexDirection: 'row' }}
        >
          <div className="container">
            <div className="about-padding">
              <div className="hero-info about-title">About us</div>
              <div className="about-text">
                Opened in 1998, located in the heart of Laguna Phuket. Albatross
                Cafe is a small romantic terrace which can easily be reached by
                free ferry boat or shuttle bus from any Laguna Resort hotel,
                villa or appartment. Featuring home style Thai, seafood and
                International cuisine cooked on the spot for you. Open daily
                with daily happy hour at 17:00
              </div>
              <div className="justify-center flex">
                <Link className="button is-primary is-medium" to='/about'>Find Out More</Link>
              </div>
            </div>
          </div>
          <div className="about-img" />
        </section>
        <section>
          <iframe
            title="homeMap"
            src="https://snazzymaps.com/embed/121975"
            width="100%"
            height="400px"
            style={{ border: 'none' }}
          />
        </section>
        <section className="hero">
          <div className="hero-body">
            <div className="container flex justify-between">
              <div>
                <h1 className="title black">
                  For reservations please contact us
                </h1>
                <h2 className="title black">089-8732829</h2>
                <h2 className="subtitle black">Opens from 9:30 to 22:30</h2>
              </div>
              {/* <span>
                <i class="fab fa-instagram" style={{ fontSize: "3rem" }} />
              </span> */}
            </div>
          </div>
        </section>
        <section
          className="footer is-black"
          style={{ padding: '1.5rem 1.5rem', backgroundColor: '#303030' }}
        >
          <h3 style={{ textAlign: 'center', fontSize: '1.4rem' }}>
            {'< /> by '}
            <a
              className="footer-name"
              href="https://vascodegraaff.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vasco de Graaff
            </a>
          </h3>
        </section>
      </div>
    );
  }
}

export default Home;
