import React from 'react';
import { shallow, mount } from 'enzyme';
import { Navbar } from '../../../src/components/layouts/Navbar';

describe('<Navbar/>', () => {
  const props = {
    logoutUser: jest.fn(),
    auth: {
      isAuthenticated: true,
      loading: false,
      user: {}
    }
  }
  const component = shallow(<Navbar {...props} />);

  test('Renders the <Navbar/> component', () => {
    expect(component).toHaveLength(1);
  });

});
