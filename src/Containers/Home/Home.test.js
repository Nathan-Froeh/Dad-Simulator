import React from 'react';
import {shallow} from 'enzyme';
import {
  Home,
  mapDispatchToProps,
  mapStateToProps
} from './Home';


describe('Home', () => {
  let wrapper, instance
  const props = {
    getFactOfTheDay: jest.fn(),
    factOfTheDay: 'factOfTheDay'
  }
  beforeEach(() => {
    wrapper = shallow(<Home{...props}/>)
  })

  it('Home should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})