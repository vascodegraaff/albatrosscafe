import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';

class Recommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth
    });
  };

  recommendedData() {
    const recommendedCss =
      this.state.width < 568
        ? 'menu-item-sm'
        : this.state.width < 1024
        ? 'menu-item-md'
        : 'menu-item-lg';
    return this.props.menu.map(item => {
      return (
        <div className={recommendedCss}>
          <img className="item-img" src={item.image} />
          <div className="item-details">
            <div className="item-title title is-6">{item.name}</div>
            <div className="item-tag">{item.categories}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    const recommendedItems =
      this.state.width < 568 ? 2 : this.state.width < 1024 ? 4 : 4;
    const screen =
      this.state.width < 568 ? 'sm' : this.state.width < 1024 ? 'md' : 'lg';
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: recommendedItems,
      slidesToScroll: 1,
      arrows: true,
      className: ''
    };
    return (
      <div>
        {screen === 'sm' ? (
          <div className="justify-between">
            <Slider ref={c => (this.slider = c)} {...settings}>
              {this.recommendedData()}
            </Slider>
          </div>
        ) : screen === 'md' ? (
          <div>
            <Slider
              ref={c => (this.slider = c)}
              {...settings}
              className="container flex"
            >
              {this.recommendedData()}
            </Slider>
          </div>
        ) : (
          <div className="flex flex-row">
            <a className="flex align-center" onClick={this.previous}>
              <svg
                style={{
                  width: '50px',
                  height: '50px',
                  transform: 'rotate(180deg)'
                }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000000"
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </a>
            <Slider
              ref={c => (this.slider = c)}
              {...settings}
              className="container flex"
            >
              {this.recommendedData()}
            </Slider>
            <a className="flex align-center" onClick={this.next}>
              <svg style={{ width: '50', height: '50px' }} viewBox="0 0 24 24">
                <path
                  fill="#000000"
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    menu: state.menu
  };
}

export default connect(mapStateToProps)(Recommended);
