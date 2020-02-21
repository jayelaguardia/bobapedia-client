import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from '../routes&components/RegistrationForm'

it('RegistrationForm renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegistrationForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});