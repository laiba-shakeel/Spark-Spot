import React from 'react'
import './style.css'
import { DummyPerson } from '../../../Assets'
import GradientButton from '../../Button/GradientButton'
import baseColors from '../../../Constant/color'


const ClientAccountDetailForm = () => {
  return (
    <div>
      <div className="container-xl px-4 mt-4">
    <div className="row">
        <div className="col-xl-4">
          
            <div className="card mb-4 mb-xl-0">
                <div className="card-header">Profile Picture</div>
                <div className="card-body text-center">
                    <img className="img-account-profile rounded-circle mb-2" src={DummyPerson} alt='' />
                    <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                    <GradientButton variant="primary"
            title="Upload your image"
            color={baseColors.white}
            backgroundColor1={baseColors.primaryColor}
            backgroundColor2={baseColors.secondaryColor}
          />
                </div>
            </div>
        </div>
        <div className="col-xl-8">
            <div className="card mb-4">
                <div className="card-header">Account Details</div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label className="small mb-1" >Username (how your name will appear to other users on the site)</label>
                            <input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username" />
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputFirstName">First name</label>
                                <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="Valerie"/>
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputLastName">Last name</label>
                                <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="Luna"/>
                            </div>
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputOrgName">Organization name</label>
                                <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" value="Start Bootstrap" />
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputLocation">Location</label>
                                <input className="form-control" id="inputLocation" type="text" placeholder="Enter your location" value="San Francisco, CA" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="small mb-1" for="inputEmailAddress">Email address</label>
                            <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="name@example.com" />
                        </div>
                    
                        <div className="row gx-3 mb-3">
                           
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputPhone">Phone number</label>
                                <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567"/>
                            </div>
                           
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputBirthday">Birthday</label>
                                <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="06/10/1988"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default ClientAccountDetailForm




// import { PlusOutlined } from '@ant-design/icons';
// import {
//   Button,
//   Cascader,
//   Checkbox,
//   DatePicker,
//   Form,
//   Input,
//   InputNumber,
//   Radio,
//   Select,
//   Switch,
//   TreeSelect,
//   Upload,
// } from 'antd';
// const { RangePicker } = DatePicker;
// const { TextArea } = Input;
// const normFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e?.fileList;
// };
// const AccountDetailForm = () => {
 
//   return (
//     <>
//     <div classNameName='container' style={{border:"2px solid black"}}>
      
//       <Form 
//       classNameName="row" style={{border:"2px solid black" , maxWidth: 600,}}
//         labelCol={{
//           span: 4,
//         }}
//         wrapperCol={{
//           span: 14,
//         }}
//         layout="horizontal"
//       >
//       <div classNameName='col-md-6'>
//         <Form.Item label="Input">
//           <Input />
//         </Form.Item>
//         <Form.Item label="Select">
//           <Select>
//             <Select.Option value="demo">Demo</Select.Option>
//           </Select>
//         </Form.Item>
//         <Form.Item label="Gender">
//           <Radio.Group>
//             <Radio value="apple"> Male </Radio>
//             <Radio value="pear"> Female </Radio>
//           </Radio.Group>
//         </Form.Item>
//         <Form.Item label="TreeSelect">
//           <TreeSelect
//             treeData={[
//               {
//                 title: 'Light',
//                 value: 'light',
//                 children: [
//                   {
//                     title: 'Bamboo',
//                     value: 'bamboo',
//                   },
//                 ],
//               },
//             ]}
//           />
//         </Form.Item>
//         <Form.Item label="Cascader">
//           <Cascader
//             options={[
//               {
//                 value: 'zhejiang',
//                 label: 'Zhejiang',
//                 children: [
//                   {
//                     value: 'hangzhou',
//                     label: 'Hangzhou',
//                   },
//                 ],
//               },
//             ]}
//           />
//         </Form.Item>
//         <Form.Item label="DatePicker">
//           <DatePicker />
//         </Form.Item>
//         <Form.Item label="RangePicker">
//           <RangePicker />
//         </Form.Item>
//         <Form.Item label="InputNumber">
//           <InputNumber />
//         </Form.Item>
//         </div>
//         <div classNameName='col-md-6'>
//         <Form.Item label="TextArea">
//           <TextArea rows={4} />
//         </Form.Item>
//         <Form.Item label="Switch" valuePropName="checked">
//           <Switch />
//         </Form.Item>
//         <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
//           <Upload action="/upload.do" listType="picture-card">
//             <div>
//               <PlusOutlined />
//               <div
//                 style={{
//                   marginTop: 8,
//                 }}
//               >
//                 Upload
//               </div>
//             </div>
//           </Upload>
//         </Form.Item>
//         <Form.Item label="Button">
//           <Button>Button</Button>
//         </Form.Item>
//         </div>
//       </Form>
//       </div>
      
//     </>
//   );
// };
// export default AccountDetailForm;