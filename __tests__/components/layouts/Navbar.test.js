import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from '../../../src/components/layouts/Navbar';

const props = {
  logoutUser: jest.fn(),
  auth: {
    isAuthenticated: true,
    loading: false,
    user: {}
  }
}
const component = shallow(<Navbar {...props} />);

describe('<Navbar/>', () => {
  test('Renders the <Navbar/> component', () => {
    expect(component).toHaveLength(1);
  });

  test('It has the <NavLink/> component', () => {
    const navlink = component.find('NavLink')
    expect(navlink).toHaveLength(1);
  });
});
