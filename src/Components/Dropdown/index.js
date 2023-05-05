

import { NavLink, } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import {  Dropdown, message, Space } from 'antd';
import baseColors from "../../Constant/color";
import React from 'react';


const style = {

    Navbar: {
      background: "white",
    },
   Dropdawn_Style: {
    color: "black",
     fontWeight:'bold',
    textAlign: 'center',
    height:'25px'
    
  },
  Dropdawn_Style_Items: {
    color: "black",
    
    
  },
    icon_style:{
      color: baseColors.white,
      background:"white",
      padding:'10px',
      textAlign:'center',
      width:'50px',
      Border: '1px solid',
      borderRadius: "50%"
    }
  }

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  
  const items = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
    {
      label: '4st menu item',
      key: '4',
    },
    {
      label: '5nd menu item',
      key: '5',
    },
    {
      label: '6rd menu item',
      key: '6',
    },
  ];

function DropdownMenu({title}) {
  return (
    
    <NavLink to='/all-categories' >
      <Dropdown
    menu={{
      items,
      onClick,
    }}
    style={style.Dropdawn_Style_Items}
   >
    <a onClick={(e) => e.preventDefault()} className='row '>
      <Space style={style.Dropdawn_Style} >
        {title}
        <DownOutlined style={{fontSize:'0.4rem'}}/>
      </Space>
    </a>
  </Dropdown>
  </NavLink>
  );
}

export default DropdownMenu;