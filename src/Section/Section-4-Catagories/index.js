import React from "react";
import "./style.css";
import HoverButton from "../../Components/Button/HoverFlatButton/index"
// import bg from '../../Assets/bg-grad.jpg'
import { Sec41, Sec42, Sec43, Sec45, Sec46, Sec47, Sec8 } from "../../Assets/index";
const SectionFourCatagory = () => {
  const [selected, setSelected] = React.useState(Sec43);
  return ( 
    <div className="container MainDiv shadow my-2 my-md-5">
      <div className="row d-flex justify-content-center m-0">
        <div className="col-12 col-md-3 d-flex flex-column justify-content-around align-items-center">
          <div className="row">
            <p className="fonts" onClick={() => setSelected(Sec41)}>
              Mobile App Development
            </p>
            <p className="fonts d-none d-md-block" onClick={() => setSelected(Sec8)}>
              Shopify Development
            </p>
            <p className="fonts d-none d-md-block" onClick={() => setSelected(Sec43)}>
              Wordpress Development
            </p>
            <p className="fonts d-none d-md-block" onClick={() => setSelected(Sec45)}>
              Data Visualization
            </p>
            <p className="fonts d-none d-md-block" onClick={() => setSelected(Sec46)}>
              Machine Learning
            </p>
            <p className="fonts d-none d-md-block" onClick={() => setSelected(Sec47)}>
              CyberSecurity & Data Protection
            </p>
          </div>
          <div className="row d-none d-md-block">
            < HoverButton title="Browser Project"/>
          </div>
        </div>
        <div className=" col-md-9 d-none d-md-block p-0">
          <img
            src={selected}
            style={{
              width: "100%",
              height: "45vh",
              backgroundSize: "contain",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
          />
        </div>
        <div className="col-12 d-block d-md-none backImage d-flex flex-column justify-content-end align-items-center pb-4">
            < HoverButton title="Browser Project"/>
          </div>

      </div>
    </div>
  );
};

export default SectionFourCatagory;
