import React from 'react';
import { connect } from 'react-redux';
import { onLogout } from '../Logout/action';

class OtpValidationContainer extends React.Component {
  render() {
    return (
      <div>
        <div>
          dashboard
        </div>
        <button onClick={this.props.onLogout}>Logout</button>
      </div>
    );
  }
}

function MapDispatchToPros(dispatch) {
  return {
    onLogout: () => dispatch(onLogout()),
  };
}

export default connect(null, MapDispatchToPros)(OtpValidationContainer);
