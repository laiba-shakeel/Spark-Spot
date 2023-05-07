import React, { Component , useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import baseColors from "../../Constant/color";
import { Nasdaq, ImageSignUp } from "../../Assets";


export default class Resizable extends Component {

  render() {
    const settings = {
      infinite: true,
      speed: 600,
      slidesToShow: 2,
      slidesToScroll: 1, 
      
    };
    return (
      <div
        className="row d-dlex justify-content-center align-items-center mt-3 mx-0 "
      >
        <div
          className=" col-11 col-xl-9 m-0"
          style={{
            // width: "600px",
            display: "block",
            backgroundColor: baseColors.Grey,
          }}
        >
          <Slider {...settings}>
            <div>
              <div
                className="p-2"
                style={{
                  borderRadius: "5px",
                  width: "400px",
                  backgroundColor: baseColors.CarouselGreen,
                }}
              >
                <img src={Nasdaq} />
                <p style={{ color: baseColors.white }}>
                  NASDAQ Logo “sparkspot enables us to differentiate ourselves from
                  our competitors and produce content at a higher caliber.”
                </p>
                <p style={{ color: baseColors.white }}>
                  Josh Machiz, Chief Digital Officer
                </p>
                <p style={{ color: baseColors.white }}>Results</p>
                <div
                  className="row m-0 "
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderColor: baseColors.Grey,
                    paddingTop: 3,
                  }}
                >
                  <div className="row">
                    <strong
                      className="col-5 p-0"
                      style={{ color: baseColors.white }}
                    >
                      Emmy Winning
                    </strong>
                    <strong
                      className="col-7"
                      style={{ color: baseColors.white }}
                    >
                      Millions
                    </strong>
                  </div>

                  <div className="row">
                    <p
                      className="col-5 p-0"
                      style={{ color: baseColors.white }}
                    >
                      Facebook Watch program
                    </p>
                    <p className="col-7" style={{ color: baseColors.white }}>
                      of impressions generated per client per IPO
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="p-2"
                style={{
                  borderRadius: "5px",
                  width: "400px",
                  backgroundColor: baseColors.CarouselBrown,
                }}
              >
                <img src={Nasdaq} />
                <p style={{ color: baseColors.white }}>
                  NASDAQ Logo “sparkspot enables us to differentiate ourselves from
                  our competitors and produce content at a higher caliber.”
                </p>
                <p style={{ color: baseColors.white }}>
                  Josh Machiz, Chief Digital Officer
                </p>
                <p style={{ color: baseColors.white }}>Results</p>
                <div
                  className="row m-0 "
                  style={{
                    borderTopStyle: "solid",
                    borderTopWidth: "1px",
                    borderColor: baseColors.Grey,
                    paddingTop: 3,
                  }}
                >
                  <div className="row">
                    <strong
                      className="col-5 p-0"
                      style={{ color: baseColors.white }}
                    >
                      Emmy Winning
                    </strong>
                    <strong
                      className="col-7"
                      style={{ color: baseColors.white }}
                    >
                      Millions
                    </strong>
                  </div>

                  <div className="row">
                    <p
                      className="col-5 p-0"
                      style={{ color: baseColors.white }}
                    >
                      Facebook Watch program
                    </p>
                    <p className="col-7" style={{ color: baseColors.white }}>
                      of impressions generated per client per IPO
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <div className="m-0" style={{ borderRadius:"5px", width: "400px",  backgroundColor:baseColors.CarosuselDarkGreen }}>
                <div
                  className="row m-0 "
                >
                  <div className="col-8 p-0">
                    <img src={ImageSignUp} width="235px" style={{borderRadius:5}}/>
                  </div>

                  <div className="col-4">
                    <div className="row">
                  <strong className=" p-0" style={{color:baseColors.white}}>
                    Emmy Winning
                    </strong>
                    <img src={Nasdaq} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
