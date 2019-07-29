import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Button, ButtonLink } from '../../../src/components/commons/Button';

const props = {
  buttonLink: {
    href: '',
    linkClass: '',
    linkName: '',
    onClick: jest.fn()
  },
  button: {
    value: 1, 
    btnClass:'', 
    btnName: '', 
    type:'', 
    onClick: jest.fn(), 
    name: '',
  }
}

const setupButton = () => {
  const wrapper = shallow(<Button {...props.button} />);
  return wrapper
}

const setupButtonLink = () => {
  const wrapper = shallow(<ButtonLink {...props.buttonLink} />);
  return wrapper
}

describe('<Button/>', () => {
  test('should render the Button component properly', () => {
    let wrapperBtn;
    wrapperBtn = setupButton();
    expect(toJson(wrapperBtn)).toMatchSnapshot();
  })

  test('should render the ButtonLink component properly', () => {
    let wrapper;
    wrapper = setupButtonLink();
    expect(toJson(wrapper)).toMatchSnapshot();
  })
});
