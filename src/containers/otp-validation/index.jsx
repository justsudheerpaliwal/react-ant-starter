import React from 'react';
import { connect } from 'react-redux';
import { onMobileNumberChange, onMobileNumberSubmit } from './actions';
import OtpValidation from '../../components/otp-validation/otp-validation';

class OtpValidationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(value) {
    this.props.onMobileNumberSubmit(value.mobileNumber);
  }
   
  render() {
    return <OtpValidation onSubmit={this.onSubmit} />;
  }
}

/**
 *
 * @param {Object} state
 */
function mapStateToProps(state) {
  /**
   * returns an object
   * Whatever is returned will be show up as props inside SmartComponent
   */
  return {
    number: state.sample && state.sample.partialMobileNumber,
  };
}

/**
 *
 * @param {Object} dispatch
 * Anything return from function will be  received as props on the SmartComponent Container
 */
function mapDispatchToProps(dispatch) {
  return {
    onMobileNumberChange: data => dispatch(onMobileNumberChange(data)),
    onMobileNumberSubmit: data => dispatch(onMobileNumberSubmit(data)),
  };
}

/**
 * connect() promotes the simple component SmartComponent into a container or smart component
 * It makes all the actions and states from Redux store as a prop
 */
export default connect(mapStateToProps, mapDispatchToProps)(OtpValidationContainer);

