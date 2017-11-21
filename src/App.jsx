import React from 'react';
import SmartComponent from './containers/SampleContainer';

const App = () => (
  <div className="container text-center">
    <br />
    <h3 className="text-success">Hello from App</h3>
    <br />
    <p className="text-warning">
      Edit the <code className="text-danger">src/containers/App</code> to change the content
    </p>
    {/* import your components/containers here */}
    <SmartComponent />
    <p className="text-warning">
      Look at the <code className="text-danger">browser console</code> for props
    </p>
  </div>
);

export default App;

