import React from 'react';
import ReactDOM from 'react-dom';
import UpdateTeaForm from '../routes&components/UpdateTeaForm'

it('UpdateTeaForm renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UpdateTeaForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});