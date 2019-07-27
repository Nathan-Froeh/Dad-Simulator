import React from 'react';
import {shallow} from 'enzyme';
import {
  Advice,
  mapDispatchToProps,
  mapStateToProps
} from './Advice';

// 63.64 |     62.5 |    45.45 |       70
// 25,30,43,44,73,75


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

  it('componentDidMount should call handleSubmit', () => {
    instance.handleSubmit = jest.fn()
    instance.componentDidMount()
    expect(instance.handleSubmit).toHaveBeenCalled()
  })

})

