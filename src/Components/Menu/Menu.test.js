import React from 'react'
import {shallow} from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  const wrapper = shallow(<Menu/>)

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})