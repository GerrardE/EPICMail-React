import React from 'react';
import { shallow } from 'enzyme';
import { Drafts } from '../../../src/components/dashboard/Drafts';

describe('<Drafts/>', () => {
  const props = {
    getDrafts: jest.fn(),
    dashboard: {
      draftMails: {
        map: jest.fn()
      },
    },
  }

  const wrapper = shallow(<Drafts {...props} />);
  test('Renders the <Drafts/> component', () => {
    expect(wrapper).toHaveLength(1);
  });

  test('It has the <MailField/> component', () => {
    const mailfield = wrapper.find('MailField');
    expect(mailfield).toHaveLength(1);
  });

  test('It has the <SideNav/> component', () => {
    const sidenav = wrapper.find('SideNav');
    expect(sidenav).toHaveLength(1);
  });
});
