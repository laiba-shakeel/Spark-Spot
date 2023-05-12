import React from 'react'
import { Layout } from "antd";
import AppHeader from '../../Components/Header'
import AppFooter from '../../Components/Footer'
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
          <AppHeader />
          
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
          <AppFooter />
        </Footer>
      </Layout>
    </div>
  )
}

export default BasicLayout
