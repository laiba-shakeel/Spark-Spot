import { Drawer } from "antd";
import { useState } from "react";
import { AppLogo, DummyPerson } from "../../../Assets";
import { useSelector } from "react-redux";
import baseColors from "../../../Constant/color";
import { selectAllDetails } from "../../../Redux/Client/AccountDetail/AccountDetailSlice";

const ClientProfileDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const style = {
    text: {
      fontSize: "12px",
      fontWeight: "bolder",
      padding: "5px",
      paddingRight: "15px",
      textAlign: "end",
      fontStyle: "italic",
      color: "#605d5d",
      border: "2px solid blue",
    },
    text1: {
      fontSize: "17px",
      fontWeight: "bolder",
      padding: "5px",
      marginTop: "5px",
      marginBottom: "5px",
      border: "2px solid blue",
    },
    text2: {
      fontSize: "14px",
      fontWeight: "bold",
      padding: "5px",
      marginTop: "5px",
      marginBottom: "5px",
      border: "2px solid blue",
    },
  };

  const posts = useSelector(selectAllDetails);

  const renderPosts = posts.map((post) => (
    // <article key={post.id}>
    //   <h3>{post.title}</h3>
    //   <p> {post.content.substring(0, 100)} </p>
    // </article>
    <article>
      <text className="col-5" style={style.text1}>
        Username:
      </text>
      <text className="col-7" style={style.text2}>
        {post.UserName}
      </text>
    </article>
  ));

  return (
    <>
      <img
        alt=""
        width="35px"
        height="35px"
        type="primary"
        onClick={showDrawer}
        src={DummyPerson}
      />

      <Drawer
        title="Account Profile"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="row pt-3 d-flex justify-content-center align-items-center">
          <img
            alt=""
            width="150px"
            height="150px"
            src={DummyPerson}
            className="col-7 my-3"
          />
          <text style={style.text}>Active : </text>
          <div
            className="row pt-3 d-flex justify-content-evenly align-items-center"
            style={{ border: "2px solid red" }}
          >
            {renderPosts}
            <text className="col-5" style={style.text1}>
              Name:
            </text>
            <text className="col-7" style={style.text2}>
              ------
            </text>
            <text className="col-5" style={style.text1}>
              Date-Of-Birth:
            </text>
            <text className="col-7" style={style.text2}>
              ------
            </text>
            <text className="col-5" style={style.text1}>
              CompanyName:
            </text>
            <text className="col-7" style={style.text2}>
              ------
            </text>
            <text className="col-5" style={style.text1}>
              EmailAddress:
            </text>
            <text className="col-7" style={style.text2}>
              ------
            </text>
            <text className="col-5" style={style.text1}>
              PhoneNumber:
            </text>
            <text className="col-7" style={style.text2}>
              ------
            </text>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default ClientProfileDrawer;
