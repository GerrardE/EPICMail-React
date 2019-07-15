import React from 'react';
import { shallow } from 'enzyme';
import { Sent } from '../../../src/components/dashboard/Sent';

describe('<Sent/>', () => {
  const props = {
    getSent: jest.fn(),
    dashboard: {},
  }

  const wrapper = shallow(<Sent {...props} />);
  test('Renders the <Sent/> component', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('It has the <MailField/> component', () => {
    const mailfield = wrapper.find('MailField');
    expect(mailfield).toHaveLength(1);
  });
});
