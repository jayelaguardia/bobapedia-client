import React from 'react';
import ReactDOM from 'react-dom';
import CreationPage from '../routes&components/CreationPage'

it('CreationPage renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreationPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});