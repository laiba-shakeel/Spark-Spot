import React from 'react'
import { Layout } from "antd";
import GuestHeader from '../../Components/Header/GuestHeader'
import GuestFooter from '../../Components/Footer/GuestFooter'
import PagesMenu from "../../Components/PagesMenu/index";


const { Header, Footer, Content } = Layout;
function BasicLayout({children}) {
  return (
    <div>
      <Layout>
      <Header
          style={{
            margin: 0,
            padding: 0,
            width: "auto",
            height: "auto",
            backgroundColor: "white",
            
          }}
          className="position-sticky fixed-top"
        >
          <GuestHeader />
          
        </Header>
        <Content
          style={{
            margin: 0,
            padding: 0,
            width: "100%",
            height: "auto",
            backgroundColor: "white",
          }}
        >
          <PagesMenu />
          {children}
        </Content>

        <Footer
          style={{
            margin: 0,
            padding: 0,
            width: "auto",
            height: "auto",
            backgroundColor: "white",
          }}
        >
          <GuestFooter />
        </Footer>
      </Layout>
    </div>
  )
}

export default BasicLayout
