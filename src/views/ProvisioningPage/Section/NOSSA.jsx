import React, { Component } from 'react';
// react component for creating beautiful carousel
import Carousel from "react-slick";
// core components
import Card from "components/Card/Card.jsx";

// My Indihome
import image1 from "assets/img/provisioning/NOSSA/1.gif";
import image2 from "assets/img/provisioning/NOSSA/2.gif";
import image3 from "assets/img/provisioning/NOSSA/3.gif";
import image4 from "assets/img/provisioning/NOSSA/4.gif";
import image5 from "assets/img/provisioning/NOSSA/5.gif";
import image6 from "assets/img/provisioning/NOSSA/6.gif";
import image7 from "assets/img/provisioning/NOSSA/7.gif";
import image8 from "assets/img/provisioning/NOSSA/8.gif";
import image9 from "assets/img/provisioning/NOSSA/9.gif";
import image10 from "assets/img/provisioning/NOSSA/10.gif";
import image11 from "assets/img/provisioning/NOSSA/11.gif";
import image12 from "assets/img/provisioning/NOSSA/12.gif";
import image13 from "assets/img/provisioning/NOSSA/13.gif";
import image14 from "assets/img/provisioning/NOSSA/14.gif";
import image15 from "assets/img/provisioning/NOSSA/15.gif";
import image16 from "assets/img/provisioning/NOSSA/16.gif";

class NOSSA extends Component {
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
          <div>
            <img
              src={image8}
              alt="Eigth slide"
              className="slick-image"
            />
          </div>
          <div>
            <img
              src={image9}
              alt="Ninth slide"
              className="slick-image"
            />
          </div>
          <div>
            <img
              src={image10}
              alt="Tenth slide"
              className="slick-image"
            />
          </div>
          <div>
            <img
              src={image11}
              alt="Eleventh slide"
              className="slick-image"
            />
          </div>
          <div>
            <img
              src={image12}
              alt="Twelvth slide"
              className="slick-image"
            />
          </div>
          <div>
            <img
              src={image13}
              alt="Thirteenth slide"
              className="slick-image"
            />
          </div>
          <div>
            <img
              src={image14}
              alt="Fourteenth slide"
              className="slick-image"
            />
          </div>
          <div>
            <img
              src={image15}
              alt="Fiveteenth slide"
              className="slick-image"
            />
          </div>
          <div>
            <img
              src={image16}
              alt="Sixteenth slide"
              className="slick-image"
            />
          </div>
        </Carousel>
      </Card>
    );
  }
}

export default NOSSA;