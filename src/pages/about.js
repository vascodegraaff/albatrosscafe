import React, { Component } from "react";
import Navbar from "../components/navbar";

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="hero is-info is-medium">
          <div className="hero-image" id="aboutpage-hero">
            <div className="hero-body" />
          </div>
        </section>
        <section className="hero is-black is-medium flex ">
          <div
            className="container"
            style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
          >
            <div className="hero-info title">About us</div>
            <br />
            <div className="subtitle is-5">
              Albatross Cafe - providing healthy home made foods without MSG,
              making a difference by gradually phasing out single use plastics
              by February 1st 2019 . Albatross Cafe features a romantic terrace
              where Happy Hour takes place daily from 5-7pm and live guitar
              music is played from 6-10pm. Receiving local residents and
              visitors for over 20 years this restaurant has reecntly been
              upgraded to provide better weather proofing during rain showers,
              but sitting under the palm trees watching the sunset or the moon
              rise is still very special.
              <br />
              For vegetarians, no gluten or other requirements we are happy to
              receive you requests. Most food is sourced locally and we try and
              support the local suppliers whenever possible. If you give us a
              bit of notice we will be able to take special requests which are
              not on the menu.
              <br />
              Bon apetit! And please don't forget to try our specialties: Gambas
              al Ajillo, Banana Blossom Salad, BBQ'd Lobster, Kao Soi Chiang Mai
              Noodles and many more.....
            </div>
          </div>
        </section>
        <section>
          <iframe
            src="https://snazzymaps.com/embed/121975"
            width="100%"
            height="400px"
            style={{ border: "none" }}
          />
        </section>
        <section className="hero ">
          <div className="hero-body">
            <div className="container flex justify-between">
              <div>
                <h1 className="title black">
                  For reservations please contact us
                </h1>
                <h2 className="title black">089-8732829</h2>
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
    );
  }
}
export default About;
