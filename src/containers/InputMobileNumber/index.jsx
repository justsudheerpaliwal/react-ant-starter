import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { onMobileNumberSubmit } from './actions';
import InputMobileNumberComponent from '../../components/InputMobileNumber';
import { Message, Grid } from 'semantic-ui-react';

class InputMobileNumber extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.props.history.replace({
  //     pathname: this.props.location.pathname,
  //     state: {},
  //   });
  // }

  onSubmit(value) {
    return new Promise((resolve, reject) => {
      const payload = {
        resolve,
        reject,
        mobileNumber: value.mobileNumber,
      };
      this.props.onMobileNumberSubmit(payload);
    });
  }

  render() {
    return (
      <Grid verticalAlign='middle' centered>
        {
          this.props.location.state && this.props.location.state.from &&
          (
            <Grid.Row>
              <Grid.Column>
                <Message negative>
                  <Message.Header>You must be logged in to visit the page</Message.Header>
                </Message>
              </Grid.Column>
            </Grid.Row>
          )
        }
        <Grid.Row>
          <Grid.Column>
            <InputMobileNumberComponent
              onSubmit={this.onSubmit}
              mobileNumber={this.props.mobileNumber}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
    onMobileNumberSubmit: data => dispatch(onMobileNumberSubmit(data)),
  };
}

/**
 * connect() promotes the simple component SmartComponent into a container or smart component
 * It makes all the actions and states from Redux store as a prop
 */
export default connect(mapStateToProps, mapDispatchToProps)(InputMobileNumber);

