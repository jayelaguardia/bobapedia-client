import React from 'react';
import ReactDOM from 'react-dom';
import AddTeaForm from '../routes_components/AddTeaForm'

it('AddTeaForm renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddTeaForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});