
  import { Button, Menu } from 'antd';
  import { useState } from 'react';
  function getItem(label, key, icon, children, type) {
    return {
      key,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Option 1', '1',),
    getItem('Option 2', '2', ),
    getItem('Option 3', '3',),
    getItem('Navigation One', 'sub1', [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
    ]),
    getItem('Navigation Two', 'sub2',  [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
  ];
  const CheckDrawer = () => {
     
    return (
      <div
        style={{
          
          background:"green"
        }}
      >
        
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{background:"red"}}
          mode="inline"
          theme="dark"
          items={items}
          
        >
        </Menu>
      </div>
    );
  };
  export default CheckDrawer;