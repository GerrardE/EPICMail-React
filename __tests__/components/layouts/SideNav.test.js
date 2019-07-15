import React from 'react';
import { shallow } from 'enzyme';
import { SideNav } from '../../../src/components/layouts/SideNav';

describe('<SideNav/>', () => {
  const props = {
    logoutUser: jest.fn(),
    auth: {
      isAuthenticated: true,
      loading: false,
      user: {}
    }
  }
  const component = shallow(<SideNav />);

  test('Renders the <SideNav/> component', () => {
    expect(component).toHaveLength(1);
  });

});
