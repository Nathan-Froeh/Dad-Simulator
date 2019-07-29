import React from 'react';
import {shallow} from 'enzyme';
import NoMatch from './NoMatch';

// 100% Test Coverage

describe('NoMatch', () => {
  const wrapper = shallow(<NoMatch/>)

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})