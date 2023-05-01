import React from 'react'
import { useNavigate } from 'react-router'
import baseColors from '../../Constant/index'
import { Google_icon1, Google_icon2, Google_icon3 } from '../../Assets/index'
import {  FacebookFilled, GoogleCircleFilled  , MailFilled, PhoneFilled  } from '@ant-design/icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const style={
    footer:{
        // width:"100%",
        border:'2px solid black',
        height:"auto",
        minHeight: '410px',
       

    },
     mainContainer:{
         border:'2px solid black',
        height: '100%', 
        color: '#ffff',
         backgroundColor: '#001e00',
         
     }
}
function FooterApp() {

    // const navigate = useNavigate()


  return (
  <div style={style.footer} className='d-flex justify-content-center'>
 <div style={style.mainContainer} className='container mx-1 p-0  justify-content-center'>
<div className='row d-flex justify-content-around py-3 m-0'>
    <div className='col col-lg-3 col-12 col-md-3  ps-5'>
        <p className='pb-2'>For Clients</p>
        <p>How to Hire</p>
        <p>Talent Marketplace</p>
        <p>Project Catalog</p>
        <p>Talent Scout</p>
        <p>Hire an Agency</p>
        <p>Enterprises</p>
        <p>Any Hire</p>
        <p>Contract-to-Hire</p>
        <p>Direct Contracts</p>
        <p>Hire Worldwide</p>
        <p>Hire in the USA</p>
    </div>
    <div className='col col-12 col-lg-3 col-md-3 ps-5'>
        <p className='pb-2'>For Talents</p>
        <p>How to Find Work</p>
        <p>Direct Contracts</p>
        <p>Find Freelance Jobs <br /> Worldwide</p>
        <p>Find Freelance Jobs in <br /> the USA</p>
    </div>
    <div className='col col-12 col-lg-3 col-md-3 '>
        <p className='pb-2'>Resources</p>
        <p>Help & Support</p>
        <p>Success Stories</p>
        <p>Fulcsion Reviews</p>
        <p>Resources</p>
        <p>Blog</p>
        <p>Community</p>
        <p>Afifiliate Program</p>
        <p>Free Business tolls</p>
    </div>
    <div className='col col-12 col-lg-3 col-md-3'>
        <p className='pb-2'>Company</p>
        <p>About Us</p>
        <p>Leadership</p>
        <p>Investor Relations</p>
        <p>Careers</p>
        <p>Our Impact</p>
        <p>Press</p>
        <p>Contact Us</p>
        <p>Trust, Safety & Security</p>
        <p>Modern Slavery Statement</p>
    </div>
</div>
</div>
  </div>
    )
  }
    export default FooterApp







//     <div>
    
//     <footer className=" row m-auto p-0 justify-content-center d-flex">
//     <div className="col-12 m-auto justify-content-center py-5 mb-5" style={style.footer}>
//     <div className="row  container-fluid text-left border d-flex flex-row align-items-center" style={{height: '100%'}}>
//             <div className="col-12 col-md-6 col-lg-3 text-left">
           
//                 <div>
              
//                 <ul style={style.list}>
//                 <p style={style.heading}>Categories</p>
//                 <li onClick={() => navigate('/cars')}><span>Car</span></li>
//                 <li onClick={() => navigate('/mobile')}><span>Mobile</span></li>
//                 <li onClick={() => navigate('/electronic')}><span>Electronic</span></li>
//                 <li onClick={() => navigate('/property')}><span>Property</span></li>
//                 <li onClick={() => navigate('/services')}><span>Services</span></li>
//                 <li onClick={() => navigate('/furnitue')}><span>Furniture</span></li></ul></div>
                 
//             </div>
//             <div className="col-12 col-md-6 col-lg-3 text-left">
//             <h4 onClick={() => navigate('/about') } style={style.heading}> About US</h4>
//                 <div>
//                 <ul style={style.list}>
//                 <li><span>Email</span></li>
//                 {/* <li><a href='https://www.empg.com/'>About EMPG</a></li> */}
//                 <li><span>Email</span></li>
//                 <li><span>Email</span></li>
//                 <li><span>Email</span></li></ul></div>
//             </div>
//             <div className="col-12 col-md-6 col-lg-2 text-left">
//             <h4 onClick={() => navigate('/') }  style={style.heading}> Olx</h4>
//                 <div>
//                 <ul style={style.list}><li><span>Email</span></li>
//                 <li><span>Email</span></li>
//                 <li><span>Email</span></li>
//                 <li><span>Email</span></li></ul></div>
//             </div>
//         <div className="col-12 col-md-12 col-lg-4 text-left ">
//         <span style={style.heading}>
//         <div className='row'>
//         <div className='col-12 pb-4'>
//         <h3 style={style.heading}>Follow US</h3>
//         </div>
//         <div className='col-12 '>
//         <span><a href="https://www.facebook.com/" style={style.a}> <FacebookFilled style={style.icon}/> </a></span>
//         <span><a href="https://www.google.com/" style={style.a}> <GoogleCircleFilled style={style.icon}/> </a></span>
//         <span><a href="https://mail.google.com/" style={style.a}> <MailFilled style={style.icon}/></a> </span>
//         <span><a href='' onClick={() => navigate('/follow')} style={style.a}><PhoneFilled style={style.icon}/> </a> </span>
//         </div>
//         <div className='col-12 col-sm-4'>
//         <img src={Google_icon1} />
//         </div>
//         <div className='col-12 col-sm-4'>
//         <img src={Google_icon2} />
//         </div>
//         <div className='col-12 col-sm-4'>
//         <img src={Google_icon3} />
//         </div>
//         </div></span>
//             </div>
//     </div></div>
//     <div className='col-12 text-end py-2' style={style.footerBottom}>
//                 <span className='pe-2'><strong>Free Classifieds in Pakistan</strong></span>
//                 <span className='pe-2'>. © 2006-2022 OLX</span>
//             </div>
//     </footer>
    
//     </div>
//   )
// }

