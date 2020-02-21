import React from 'react';
import ReactDOM from 'react-dom';
import CreationTeaPage from '../routes&components/CreationTeaPage'

it('CreationTeaPage renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreationTeaPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});