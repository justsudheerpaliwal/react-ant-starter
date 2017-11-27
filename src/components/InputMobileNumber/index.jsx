import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Button, Form } from 'semantic-ui-react';
import CustomInput from '../FormWrappers/CustomInput';
import './index.css';

const OtpValidation = (props) => {
  console.log(props);
  const { handleSubmit, submitting, invalid } = props;
  return (
    <Grid verticalAlign='middle' centered>
      <Grid.Column>
        <Form onSubmit={handleSubmit} loading={submitting}>
          <Field
            component={CustomInput} name="mobileNumber"
            type="text" placeholder="Your mobile number"
            label="Enter your Mobile Number"
          />
          <Button style={{marginTop: '1em'}} disabled={invalid || submitting} primary type='submit'>Submit</Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

const validate = (values) => {
  const errors = {}
  if (isNaN(Number(values.mobileNumber))) {
    errors.mobileNumber = 'Must be a number';
  }
  if (values.mobileNumber && values.mobileNumber.length !== 10) {
    errors.mobileNumber = 'Must be 10 digits';
  }
  return errors;
}

export default reduxForm({
  // a unique name for the form
  form: 'mobileNumber',
  validate,
})(OtpValidation);
