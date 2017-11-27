import React from 'react';
import { Form, Label } from 'semantic-ui-react';

const CustomInput = ({ input, label, ls, placeholder, type, meta: { touched, error } }) => (
  <div style={{ display: 'block', paddingTop: '0.5em', paddingBottom: '0.5em' }}>
    <Form.Input label={label} {...input} placeholder={placeholder} type={type} error={Boolean(touched && error)} inline/>
    {touched && error && <Label style={{ marginTop: '-0.5em' }} basic color='red' pointing>{error}</Label>}
  </div>
);

export default CustomInput;
