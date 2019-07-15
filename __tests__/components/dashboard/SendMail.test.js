import React from 'react';
import { shallow } from 'enzyme';
import { SendMail } from '../../../src/components/dashboard/SendMail';

describe('<SendMail/>', () => {
  const props = {
    postMail: jest.fn(),
    errors: {
      message: 'delivered'
    }
  }

  const wrapper = shallow(<SendMail {...props} />);
  test('Renders the <SendMail/> component', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('It has the <SideNav/> component', () => {
    const sidenav = wrapper.find('SideNav');
    expect(sidenav).toHaveLength(1);
  });

  test('It has the <Button/> component', () => {
    const button = wrapper.find('Button');
    expect(button).toHaveLength(2);
  });
});
