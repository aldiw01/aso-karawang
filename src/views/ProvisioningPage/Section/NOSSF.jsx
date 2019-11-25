import React, { Component } from 'react';
// react component for creating beautiful carousel
import Carousel from "react-slick";
// core components
import Card from "components/Card/Card.jsx";

// My Indihome
import image1 from "assets/img/provisioning/NOSSF/1.gif";
import image2 from "assets/img/provisioning/NOSSF/2.gif";
import image3 from "assets/img/provisioning/NOSSF/3.gif";
import image4 from "assets/img/provisioning/NOSSF/4.gif";
import image5 from "assets/img/provisioning/NOSSF/5.gif";

class NOSSF extends Component {
  render() {
    const { imageClasses } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <Card carousel className={imageClasses}>
        <Carousel {...settings}>
          <div>
            <img
              src={image1}
              alt="First slide"
              className="slick-image"
            />
          </div>
          <div>
            <img
              src={image2}
              alt="Second slide"
              className="slick-image"
            />
          </div>
          <div>
            <img
              src={image3}
              alt="Third slide"
              className="slick-image"
            />
          </div>
          <div>
            <img
              src={image4}
              alt="Forth slide"
              className="slick-image"
            />
          </div>
          <div>
            <img
              src={image5}
              alt="Fifth slide"
              className="slick-image"
            />
          </div>
        </Carousel>
      </Card>
    );
  }
}

export default NOSSF;