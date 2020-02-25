import React from 'react';
import { shallow } from 'enzyme';
import CreationPage from '../routes_components/CreationPage'

it.only('CreationPage renders without crashing', () => {
  const wrapper = shallow(<CreationPage />);
  expect(wrapper.find('.CreationPage'))
});