import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MailField from '../../../src/components/commons/MailField';

const props = {
  id: 1, 
  classType: '', 
  email: '',
  createdon: '', 
  title: '', 
  body: '', 
  onClick: jest.fn()
}

const setup = () => {
  const wrapper = shallow(<MailField {...props} />);
  return wrapper
}

describe('<MailField />', () => {
  test('should render thecMailField component properly', () => {
    let wrapper;
    wrapper = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
