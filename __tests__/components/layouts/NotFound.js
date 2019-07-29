import React from 'react';
import { shallow } from 'enzyme';
import { NotFound } from '../../../src/components/layouts/NotFound';

describe('<NotFound/>', () => {
  const component = shallow(<NotFound />);

  test('Renders the <NotFound/> component', () => {
    expect(component).toHaveLength(1);
  });

  test('It has the <ButtonLink/> component', () => {
    const buttonlink = component.find('ButtonLink')
    expect(buttonlink).toHaveLength(1);
  });
});
