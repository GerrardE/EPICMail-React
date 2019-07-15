import React from 'react';
import { shallow } from 'enzyme';
import { Landing } from '../../../src/components/layouts/Landing';

describe('<Landing/>', () => {
  describe('render()', () => {
    const props = {
      auth: { isAuthenticated: false },
      history: {
        push: jest.fn(),
      }
    };

    test('Renders the <Landing/> component', () => {
      const wrapper = shallow(<Landing {...props}/>);
      const component = wrapper.find('ButtonLink');

      expect(component.length).toEqual(1);
    });
  });
});
