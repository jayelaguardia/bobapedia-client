import React from 'react';
import { shallow } from 'enzyme';
import UpdateTeaForm from '../routes_components/UpdateTeaForm'

it('UpdateTeaForm renders without crashing', () => {
  const wrapper = shallow(<UpdateTeaForm />);
  expect(wrapper.find('.UpdateTeaForm'))
});