import React from 'react';
import {shallow} from 'enzyme';
import {
  Advice,
  mapDispatchToProps,
  mapStateToProps
} from './Advice';


describe('Advice', () => {
  let wrapper, instance
  const props = {
    getRandomAdvice: jest.fn(),
    getSearchAdvice: jest.fn(),
    randomAdvice: 'randomAdvice',
    searchAdvice: 'searchAdvice'
  }
  beforeEach(() => {
    wrapper = shallow(<Advice {...props}/>)
    instance = wrapper.instance()
  })

  it('should match snap shot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})

