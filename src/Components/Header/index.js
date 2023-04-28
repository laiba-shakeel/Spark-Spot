import {
  CarOutlined,
  HomeOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const style = {};

const AppHeader = () => {
  return (
    <>
      <div>
        <div style={{ background: "grey" }}>
          <nav className="navbar navbar-expand  container-fluid topBar row ">
            <div className="col-12  d-flex justify-content-start align-items-center">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link py-0"
                    //   onClick={() => navigate('/')}
                  >
                    <img width="50px" height="50px" src="logo.svg" />
                  </a>
                </li>
                <li className="nav-item hvr_blue">
                  <button
                    className="nav-link icon-btn"
                    // onClick={() => navigate('/cars')}
                  >
                    {" "}
                    <CarOutlined /> MOTORS
                  </button>
                </li>
                <li className="nav-item hvr_blue">
                  <button
                    className="nav-link icon-btn"
                    // onClick={() => navigate('/property')}
                  >
                    {" "}
                    <HomeOutlined /> PROPERTY
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default AppHeader;
