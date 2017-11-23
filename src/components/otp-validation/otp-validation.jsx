import React from 'react';
import { Field, reduxForm } from 'redux-form';

const OtpValidation = props => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <label htmlFor="mobileNumber">First Name</label>
      <Field name="mobileNumber" component="input" type="text" />
    </div>
    <button type="submit">Submit</button>
  </form>
);

export default reduxForm({
  // a unique name for the form
  form: 'mobileNumber',
})(OtpValidation);
