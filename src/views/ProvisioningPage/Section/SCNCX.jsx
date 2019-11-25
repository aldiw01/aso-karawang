import React, { Component } from 'react';
// react component for creating beautiful carousel
import Carousel from "react-slick";
// core components
import Card from "components/Card/Card.jsx";

// My Indihome
import image1 from "assets/img/provisioning/SCNCX/1.png";
import image2 from "assets/img/provisioning/SCNCX/2.png";
import image3 from "assets/img/provisioning/SCNCX/3.png";
import image4 from "assets/img/provisioning/SCNCX/4.png";
import image5 from "assets/img/provisioning/SCNCX/5.png";
import image6 from "assets/img/provisioning/SCNCX/6.png";
import image7 from "assets/img/provisioning/SCNCX/7.png";
import image8 from "assets/img/provisioning/SCNCX/8.png";
import image9 from "assets/img/provisioning/SCNCX/9.png";
import image10 from "assets/img/provisioning/SCNCX/10.png";
import image11 from "assets/img/provisioning/SCNCX/11.png";
import image12 from "assets/img/provisioning/SCNCX/12.png";
import image13 from "assets/img/provisioning/SCNCX/13.png";

class SCNCX extends Component {
  render() {
    const { imageClasses } = this.props;
    const captionStyle = {
      backgroundColor: "rgba(10, 10, 10, 0.75)",
      borderRadius: "1rem"
    }
    // Carousel configuration
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
              src={image12}
              alt="WAIT FOR PAYMENT"
              className="slick-image"
            />
            <div className="slick-caption" style={captionStyle} >
              <h4>
                1. Deposit - Wait For Payment
              </h4>
            </div>
          </div>
          <div>
            <img
              src={image13}
              alt="PAYMENT COMPLETED"
              className="slick-image"
            />
            <div className="slick-caption" style={captionStyle} >
              <h4>
                2. Deposit - Payment Completed
              </h4>
            </div>
          </div>
          <div>
            <img
              src={image1}
              alt="First slide"
              className="slick-image"
            />
            <div className="slick-caption" style={captionStyle} >
              <h4>
                3. NCX - Create Order - Registered
              </h4>
            </div>
          </div>
          <div>
            <img
              src={image2}
              alt="Second slide"
              className="slick-image"
            />
            <div className="slick-caption" style={captionStyle} >
              <h4>
                4. NCX - Create Account
              </h4>
            </div>
          </div>
          <div>
            <img
              src={image3}
              alt="Third slide"
              className="slick-image"
            />
            <div className="slick-caption" style={captionStyle} >
              <h4>
                5. OSS - Provisioning Start
              </h4>
            </div>
          </div>
          <div>
            <img
              src={image4}
              alt="Forth slide"
              className="slick-image"
            />
            <div className="slick-caption" style={captionStyle} >
              <h4>
                6. OSS - Provisioning Issued
              </h4>
            </div>
          </div>
          <div>
            <img
              src={image5}
              alt="Fifth slide"
              className="slick-image"
            />
            <div className="slick-caption" style={captionStyle} >
              <h4>
                7. OSS - Provisioning Failed - Fallout
              </h4>
            </div>
          </div>
          <div>
            <img
              src={image6}
              alt="Sixth slide"
              className="slick-image"
            />
            <div className="slick-caption" style={captionStyle} >
              <h4>
                8. OSS - PONR - Point of no Return
              </h4>
            </div>
          </div>
          <div>
            <img
              src={image7}
              alt="Seventh slide"
              className="slick-image"
            />
            <div className="slick-caption" style={captionStyle} >
              <h4>
                9. WFM - Activation Complete
              </h4>
            </div>
          </div>
          <div>
            <img
              src={image8}
              alt="Eighth slide"
              className="slick-image"
            />
            <div className="slick-caption" style={captionStyle} >
              <h4>
                10. OSS - Provisioning Complete
              </h4>
            </div>
          </div>
          <div>
            <img
              src={image9}
              alt="Ninth slide"
              className="slick-image"
            />
            <div className="slick-caption" style={captionStyle} >
              <h4>
                11. TIBS - Fulfill Billing Start
              </h4>
            </div>
          </div>
          <div>
            <img
              src={image10}
              alt="Tenth slide"
              className="slick-image"
            />
            <div className="slick-caption" style={captionStyle} >
              <h4>
                12. TIBS - Fulfill Billing Complete
              </h4>
            </div>
          </div>
          <div>
            <img
              src={image11}
              alt="Eleventh slide"
              className="slick-image"
            />
            <div className="slick-caption" style={captionStyle} >
              <h4>
                13. Completed
              </h4>
            </div>
          </div>
        </Carousel>
      </Card>
    );
  }
}

export default SCNCX;