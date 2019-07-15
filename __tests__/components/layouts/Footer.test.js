import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '../../../src/components/layouts/Footer';

describe('<Footer/>', () => {
  describe('render()', () => {
    test('Renders the <Footer/> component', () => {
      const component = shallow(<Footer />);
      expect(component).toHaveLength(1);
    });
  });
});
