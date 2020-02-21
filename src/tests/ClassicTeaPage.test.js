import React from 'react';
import ReactDOM from 'react-dom';
import ClassicTeaPage from '../routes&components/ClassicTeaPage'

it('ClassicTeaPage renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClassicTeaPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});