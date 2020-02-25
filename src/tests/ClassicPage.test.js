import React from 'react';
import ReactDOM from 'react-dom';
import ClassicPage from '../routes_components/ClassicPage'

it('ClassicPage renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClassicPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});