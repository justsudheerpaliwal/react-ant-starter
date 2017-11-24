import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { onMobileNumberChange, onMobileNumberSubmit } from './actions';
import InputMobileNumber from '../../components/InputMobileNumber';

class InputMobileNumberContainer extends React.Component {
  constructor(props) {
    super(props);
    if (props.proceedToOtpVerification) {
      props.history.replace('/validate-otp');
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(value) {
    this.props.onMobileNumberSubmit(value.mobileNumber);
  }

  render() {
    return (
      <InputMobileNumber
        onSubmit={this.onSubmit}
        mobileNumber={this.props.mobileNumber}
      />
    );
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
    proceedToOtpVerification: state.mobileNumber && state.mobileNumber.proceedToOtpVerification,
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InputMobileNumberContainer));

