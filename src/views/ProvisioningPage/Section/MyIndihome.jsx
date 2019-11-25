import React, { Component } from 'react';
// react component for creating beautiful carousel
import Carousel from "react-slick";
// core components
import Card from "components/Card/Card.jsx";

// My Indihome
import image1 from "assets/img/provisioning/MyIH/1.gif";
import image2 from "assets/img/provisioning/MyIH/2.gif";
import image3 from "assets/img/provisioning/MyIH/3.gif";
import image4 from "assets/img/provisioning/MyIH/4.gif";
import image5 from "assets/img/provisioning/MyIH/5.gif";
import image6 from "assets/img/provisioning/MyIH/6.gif";
import image7 from "assets/img/provisioning/MyIH/7.png";

class MyIndihome extends Component {
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
          <div>
            <img
              src={image6}
              alt="Sixth slide"
              className="slick-image"
            />
          </div>
          <div>
            <img
              src={image7}
              alt="Seventh slide"
              className="slick-image"
            />
          </div>
        </Carousel>
      </Card>
    );
  }
}

export default MyIndihome;