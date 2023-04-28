// import { Layout, Space } from 'antd';
// const { Header, Footer, Content } = Layout;
// const headerStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   height: 64,
//   paddingInline: 50,
//   lineHeight: '64px',
//   backgroundColor: '#7dbcea',
// };
// const contentStyle = {
//   textAlign: 'center',
//   minHeight: 120,
//   lineHeight: '120px',
//   color: '#fff',
//   backgroundColor: '#108ee9',
// };

// const footerStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   backgroundColor: '#7dbcea',
// };


// const BasicLayout = () => (
//     <Space
//       direction="vertical"
//       style={{
//         width: '100%',
//       }}
//       size={[0, 48]}
//     >
//       <Layout>
//         <Header style={headerStyle}>Header</Header>
//         <Content style={contentStyle}>Content</Content>
//         <Footer style={footerStyle}>Footer</Footer>
//       </Layout>

//     </Space>

// )
// export default BasicLayout

import React from 'react'
import { Layout } from "antd";
import AppHeader from '../../Components/Header'
import AppFooter from '../../Components/Footer'

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
          {/* <App_menu /> */}
          {children}
          {/* <BackToTopButton /> */}
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
