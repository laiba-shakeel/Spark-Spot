import React from "react";
import "./FindTalentAuth.css";
import Layout from "../../../Layouts/BasicLayout";
import { AnimationBanner } from "../../../Assets";
import { FaFacebookF } from "react-icons/fa";

function FindTalentAuth() {
  return (
    <Layout>
      
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="row " style={{ padding: "10px" }}>
              <div className="col-xl-12">
                <div className="cardTalent cssanimation fadeInBottom">
                  {" "}
                  <a href="#" target="_blank">
                    <div className="cardTalent-body">
                      <div className="row" id="blockitems">
                        <div
                          className="col-sm-3 col-md-1 col-lg-1 col-xl-1"
                          id="icons_section"
                        >
                          {" "}
                          <i
                            className="fa fa-mobile "
                            style={{ fontSize: "40px" }}
                            aria-hidden="true"
                          ></i>{" "}
                        </div>
                        <div
                          className="col-sm-8 col-md-9 col-lg-11 col-xl-11"
                          id="heading_section"
                        >
                          <h6>Min mobil eller tablet</h6>
                          <p>
                            Hj&aelig;lp til fx vejledninger, reparation og
                            forsikring
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="row" style={{ padding: "10px" }}>
              <div className="col-md-12">
                <div className="cardTalent cssanimation2 fadeInBottom2">
                  {" "}
                  <a href="#" target="_blank">
                    <div className="cardTalent-body">
                      <div className="row" id="blockitems">
                        <div
                          className="col-sm-3 col-md-1 col-lg-1 col-xl-1"
                          id="icons_section"
                        >
                          {" "}
                          <i
                            className="fa fa-file-text-o"
                            aria-hidden="true"
                          ></i>{" "}
                        </div>
                        <div
                          className="col-sm-8 col-md-9 col-lg-11 col-xl-11"
                          id="heading_section"
                        >
                          <h6>Regning og forbrug</h6>
                          <p>Hj&aelig;lp til fx udland, forbrug og betaling</p>
                        </div>
                      </div>
                    </div>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="row" style={{ padding: "10px" }}>
              <div className="col-md-12">
                <div className="cardTalent cssanimation3 fadeInBottom3">
                  {" "}
                  <a href="#" target="_blank">
                    <div className="cardTalent-body">
                      <div className="row" id="blockitems">
                        <div
                          className="col-sm-3 col-md-1 col-lg-1 col-xl-1"
                          id="icons_section"
                        >
                          {" "}
                          <i className="fa fa-desktop" aria-hidden="true"></i>{" "}
                        </div>
                        <div
                          className="col-sm-8 col-md-9 col-lg-11 col-xl-11"
                          id="heading_section"
                        >
                          <h6>Internet og tv</h6>
                          <p>
                            Hj&aelig;lp til fx bredb&aring;nd, mobilt
                            bredb&aring;nd og tv
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="row" style={{ padding: "10px" }}>
              <div className="col-xl-12">
                <div className="cardTalent cssanimation fadeInBottom">
                  {" "}
                  <a href="#" target="_blank">
                    <div className="cardTalent-body">
                      <div className="row" id="blockitems">
                        <div
                          className="col-sm-3 col-md-1 col-lg-1 col-xl-1"
                          id="icons_section"
                        >
                          {" "}
                          <i
                            className="fas fa-sim-cardTalent"
                            aria-hidden="true"
                          ></i>{" "}
                        </div>
                        <div
                          className="col-sm-8 col-md-9 col-lg-11 col-xl-11"
                          id="heading_section"
                        >
                          <h6>Abonnement og services</h6>
                          <p>
                            Hj&aelig;lp til fx SIM-kort, opsigelse og tilvalg
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="row" style={{ padding: "10px" }}>
              <div className="col-md-12">
                <div className="cardTalent cssanimation2 fadeInBottom2">
                  {" "}
                  <a href="#" target="_blank">
                    <div className="cardTalent-body">
                      <div className="row" id="blockitems">
                        <div
                          className="col-sm-3 col-md-1 col-lg-1 col-xl-1"
                          id="icons_section"
                        >
                          {" "}
                          <i className="fa fa-signal" aria-hidden="true"></i>{" "}
                        </div>
                        <div
                          className="col-sm-8 col-md-9 col-lg-11 col-xl-11"
                          id="heading_section"
                        >
                          <h6>Drift og d&aelig;kning</h6>
                          <p>
                            Driftsinformation og netv&aelig;rksd&aelig;kning
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="row" style={{ padding: "10px" }}>
              <div className="col-md-12">
                <div className="cardTalent cssanimation3 fadeInBottom3">
                  {" "}
                  <a href="#" target="_blank">
                    <div className="cardTalent-body">
                      <div className="row" id="blockitems">
                        <div
                          className="col-sm-3 col-md-1 col-lg-1 col-xl-1"
                          id="icons_section"
                        >
                          {" "}
                          <i className="fa fa-user-o" aria-hidden="true"></i>{" "}
                        </div>
                        <div
                          className="col-sm-8 col-md-9 col-lg-11 col-xl-11"
                          id="heading_section"
                        >
                          <h6>Ny kunde</h6>
                          <p>
                            Hj&aelig;lp til fx ny mobil, bestilling og Mit Telia
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="row" style={{ padding: "10px" }}>
              <div className="col-md-12">
                <div className="cardTalent cssanimation3 fadeInBottom3">
                  {" "}
                  <a href="#" target="_blank">
                    <div className="cardTalent-body">
                      <div className="row" id="blockitems">
                        <div
                          className="col-sm-3 col-md-1 col-lg-1 col-xl-1"
                          id="icons_section"
                        >
                          {" "}
                          <i className="fa fa-user-o" aria-hidden="true"></i>{" "}
                        </div>
                        <div
                          className="col-sm-8 col-md-9 col-lg-11 col-xl-11"
                          id="heading_section"
                        >
                          <h6>Ny kunde</h6>
                          <p>
                            Hj&aelig;lp til fx ny mobil, bestilling og Mit Telia
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="row" style={{ padding: "10px" }}>
              <div className="col-md-12">
                <div className="cardTalent cssanimation3 fadeInBottom3">
                  {" "}
                  <a href="#" target="_blank">
                    <div className="cardTalent-body">
                      <div className="row" id="blockitems">
                        <div
                          className="col-sm-3 col-md-1 col-lg-1 col-xl-1"
                          id="icons_section"
                        >
                          {" "}
                          <i className="fa fa-user-o" aria-hidden="true"></i>{" "}
                        </div>
                        <div
                          className="col-sm-8 col-md-9 col-lg-11 col-xl-11"
                          id="heading_section"
                        >
                          <h6>Ny kunde</h6>
                          <p>
                            Hj&aelig;lp til fx ny mobil, bestilling og Mit Telia
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="row" style={{ padding: "10px" }}>
              <div className="col-md-12">
                <div className="cardTalent cssanimation3 fadeInBottom3">
                  {" "}
                  <a href="#" target="_blank">
                    <div className="cardTalent-body">
                      <div className="row" id="blockitems">
                        <div
                          className="col-sm-3 col-md-1 col-lg-1 col-xl-1"
                          id="icons_section"
                        >
                          {" "}
                          <i className="fa fa-user-o" aria-hidden="true"></i>{" "}
                        </div>
                        <div
                          className="col-sm-8 col-md-9 col-lg-11 col-xl-11"
                          id="heading_section"
                        >
                          <h6>Ny kunde</h6>
                          <p>
                            Hj&aelig;lp til fx ny mobil, bestilling og Mit Telia
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="row" style={{ padding: "10px" }}>
              <div className="col-md-12">
                <div className="cardTalent cssanimation3 fadeInBottom3">
                  {" "}
                  <a href="#" target="_blank">
                    <div className="cardTalent-body">
                      <div className="row" id="blockitems">
                        <div
                          className="col-sm-3 col-md-1 col-lg-1 col-xl-1"
                          id="icons_section"
                        >
                          {" "}
                          <i className="fa fa-user-o" aria-hidden="true"></i>{" "}
                        </div>
                        <div
                          className="col-sm-8 col-md-9 col-lg-11 col-xl-11"
                          id="heading_section"
                        >
                          <h6>Ny kunde</h6>
                          <p>
                            Hj&aelig;lp til fx ny mobil, bestilling og Mit Telia
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="row" style={{ padding: "10px" }}>
              <div className="col-md-12">
                <div className="cardTalent cssanimation3 fadeInBottom3">
                  {" "}
                  <a href="#" target="_blank">
                    <div className="cardTalent-body">
                      <div className="row" id="blockitems">
                        <div
                          className="col-sm-3 col-md-1 col-lg-1 col-xl-1"
                          id="icons_section"
                        >
                          {" "}
                          <i className="fa fa-user-o" aria-hidden="true"></i>{" "}
                        </div>
                        <div
                          className="col-sm-8 col-md-9 col-lg-11 col-xl-11"
                          id="heading_section"
                        >
                          <h6>Ny kunde</h6>
                          <p>
                            Hj&aelig;lp til fx ny mobil, bestilling og Mit Telia
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <div className="row" style={{ padding: "10px" }}>
              <div className="col-md-12">
                <div className="cardTalent cssanimation3 fadeInBottom3">
                  {" "}
                  <a href="#" target="_blank">
                    <div className="cardTalent-body">
                      <div className="row" id="blockitems">
                        <div
                          className="col-sm-3 col-md-1 col-lg-1 col-xl-1"
                          id="icons_section"
                        >
                          {" "}
                          <i className="fa fa-user-o" aria-hidden="true"></i>{" "}
                        </div>
                        <div
                          className="col-sm-8 col-md-9 col-lg-11 col-xl-11"
                          id="heading_section"
                        >
                          <h6>Ny kunde</h6>
                          <p>
                            Hj&aelig;lp til fx ny mobil, bestilling og Mit Telia
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default FindTalentAuth;
