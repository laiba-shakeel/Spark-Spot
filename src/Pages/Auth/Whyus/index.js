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
              <p className="m-0 fw-bold fs-3">Discover how team works</p>
              <h2>Our top Strategy</h2>
              <p className="my-4">
                creativity, honesty, hard-work and authenticit are the values that are the main pillars of our sevices giving high-quality work is our main motive. We are providing the opportunity to everyone who has the potential to do something and show up their skills and give their
                services with the help of this platform "Spark-Spot". Whearas, the people who need servies or want someone to get their work done can get the services according to their needs. Our teams creative mindsets are responsible for providing digital services at a time and know how to engage different customers at one time.
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
                        <h2>Our Vission</h2>
                        <p className="fs-4">
                        We aim for innovating and create economic opportunity for every member of the global workflow.
                     </p>
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
                        <p>Get 861 Freelancer Wordpress themes on her we offer you Digital wordpress themes. It enables to efficiently design custom layout</p>
                    </div>
                </div>
                

                
                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    <div className="service-block p-4 text-center">
                        <div className="service-icon text-center">
                            <i className="fa-regular fa-clock"></i>
                        </div>
                        <h3>Responsive Design</h3>
                        <p>Hire the best Responsive design developers. Find the most talented responsive design developers on Fiverr to bring your ideas to life.</p>
                    </div>
                </div>
                

                
                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    <div className="service-block p-4 color-bg text-center">
                        <div className="service-icon text-center">
                            <i className="fa-solid fa-book"></i>
                        </div>
                        <h3>Media & Advertisement</h3>
                        <p>The professional will create ad content of various advertising platforms.Find the most talented responsive design developers on Fiverr to bring your ideas to life</p>
                    </div>
                </div>
                

                
                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    <div className="service-block p-4  text-center">
                        <div className="service-icon text-center">
                            <i className="fa-solid fa-briefcase"></i>
                        </div>
                        <h3>Graphic Design</h3>
                        <p>Hire the best Responsive design developers. Find the most talented responsive design developers on Fiverr to bring your ideas to life.</p>
                    </div>
                </div>
                

                
                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    <div className="service-block p-4 color-bg text-center">
                        <div className="service-icon text-center">
                            <i className="fa-solid fa-crop"></i>
                        </div>
                        <h3>Apps Development</h3>
                        <p>The professional will create ad content of various advertising platforms.Find the most talented responsive design developers on Fiverr to bring your ideas to life</p>
                    </div>
                </div>
                

                
                <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    <div className="service-block p-4 text-center">
                        <div className="service-icon text-center">
                            <i className="fa-solid fa-house-user"></i>
                        </div>
                        <h3>Networking</h3>
                        <p>Get 861 Freelancer Wordpress themes on her we offer you Digital wordpress themes. It enables to efficiently design custom layout</p>
                    </div>
                </div>
                
                </div>
        </div>
    </section>
    </Layout>
  );
}

export default Whyus;
