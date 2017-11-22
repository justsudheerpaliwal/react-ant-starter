import React from 'react';
import { Button } from 'antd';

const OtpValidation = props => (
  <div>
    <input 
      type="text" 
      placeholder="Enter your number" 
      value={props.number} 
      onChange={event => props.onOtpNumberChange(event.target.value)} />
    <Button type="primary" onClick={() => props.onOtpNumberSubmit(props.number)}>
      Submit
    </Button>
  </div>
);

export default OtpValidation;
