import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';

describe('Calculator', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Calculator />));

    it('takes a snapshot of Calculator component', () => expect(wrapper).toMatchSnapshot());
    it('should render a <div />', () => {
      expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render the display component', () => {
      expect(wrapper.containsMatchingElement(<Display/>)).toEqual(true);
    })
  });
  