import React from 'react';
import { shallow } from 'enzyme';
import { Inbox } from '../../../src/components/dashboard/Inbox';

describe('<Inbox/>', () => {
  const props = {
    getRead: jest.fn(),
    getUnread: jest.fn(),
    dashboard: {},
  }

  const wrapper = shallow(<Inbox {...props} />);
  test('Renders the <Inbox/> component', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('It has the <MailField/> component', () => {
    const mailfield = wrapper.find('MailField');
    expect(mailfield).toHaveLength(1);
  });
});
