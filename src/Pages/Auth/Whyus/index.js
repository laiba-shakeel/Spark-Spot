import React from "react";
import Layout from "../../../Layouts/BasicLayout";
import "./style.css";
import baseColors from "../../../Constant/color";
import HoverFlatButton from "../../../Components/Button/HoverFlatButton";

function Whyus() {
  return (
    <Layout>
      <div className="py-5" id="venue">
        <div className="container" style={{background:` linear-gradient(to bottom right, ${baseColors.primaryColor} 0%, ${baseColors.primaryColorThree} 65%)`}}>
          <div className="row  animate-in-down">
            <div className="p-4 col-md-6 align-self-center text-color">
              <p className="m-0">Feel comfortable, and purchase items</p>
              <h2>Discover the products</h2>
              <p className="my-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here
              </p>{" "}
              <HoverFlatButton title="Get Started"/>
              {/* <a href="#" className="btn mb-3 p-2 btn-light">
                View the gallery
              </a> */}
            </div>
            <div className="p-0 col-md-6" style={{backgroundImage:`url(https://i.imgur.com/K7A78We.jpg)`, backgroundSize:"cover"}}>
              
            </div>
          </div>
        </div>
      </div>
      <section className="services">
        <div className="container">
            <div className="row justify-content-center">
               
                <div className="col-xl-6 col-lg-8">
                    <div className="title text-center">
                        <h2>Our Services</h2>
                        <p>Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu. Sed
                            condimentum iaculis ex,
                            in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus
                            luctus dignissim.</p>
                        <div className="border"></div>
                    </div>
                </div>
            </div>
            <div className="row no-gutters"> 

                
                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    <div className="service-block p-4 color-bg text-center">
                        <div className="service-icon text-center">
                            <i className="fa-regular fa-clone"></i>
                        </div>
                        <h3>WordPress Theme</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id
                            tellus. Nullam
                            iaculis arcu at mauris dapibus consectetur.</p>
                    </div>
                </div>
                

                
                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    <div className="service-block p-4 text-center">
                        <div className="service-icon text-center">
                            <i className="fa-regular fa-clock"></i>
                        </div>
                        <h3>Responsive Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id
                            tellus. Nullam
                            iaculis arcu at mauris dapibus consectetur.</p>
                    </div>
                </div>
                

                
                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    <div className="service-block p-4 color-bg text-center">
                        <div className="service-icon text-center">
                            <i className="fa-solid fa-book"></i>
                        </div>
                        <h3>Media & Advertisement</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id
                            tellus. Nullam
                            iaculis arcu at mauris dapibus consectetur.</p>
                    </div>
                </div>
                

                
                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    <div className="service-block p-4  text-center">
                        <div className="service-icon text-center">
                            <i className="fa-solid fa-briefcase"></i>
                        </div>
                        <h3>Graphic Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id
                            tellus. Nullam
                            iaculis arcu at mauris dapibus consectetur.</p>
                    </div>
                </div>
                

                
                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    <div className="service-block p-4 color-bg text-center">
                        <div className="service-icon text-center">
                            <i className="fa-solid fa-crop"></i>
                        </div>
                        <h3>Apps Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id
                            tellus. Nullam
                            iaculis arcu at mauris dapibus consectetur.</p>
                    </div>
                </div>
                

                
                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    <div className="service-block p-4 text-center">
                        <div className="service-icon text-center">
                            <i className="fa-solid fa-house-user"></i>
                        </div>
                        <h3>Networking</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id
                            tellus. Nullam
                            iaculis arcu at mauris dapibus consectetur.</p>
                    </div>
                </div>
                
                </div>
        </div>
    </section>
    </Layout>
  );
}

export default Whyus;
