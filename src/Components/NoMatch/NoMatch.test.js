import React from 'react';
import {shallow} from 'enzyme';
import NoMatch from './NoMatch';

describe('NoMatch', () => {
  const wrapper = shallow(<NoMatch/>)

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})