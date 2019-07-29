import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Loading from '../../../src/components/commons/Loading';

const props = {
  loading: ''
}

const setup = () => {
  const wrapper = shallow(<Loading {...props} />);
  return wrapper
}

describe('<Loading />', () => {
  test('should render the Loading component properly', () => {
    let wrapper;
    wrapper = setup();
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
