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
  const event = {
    preventDefault: jest.fn(),
    target: {
      value: 'BATMAN'
    }
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

  it('handleChange sets state of category to lowercase batman', () => {
    expect(wrapper.state('category')).toEqual('random')
    instance.handleChange(event)
    expect(wrapper.state('category')).toEqual('batman')
  })

  it('handleSubmit contains e.preventDefault', () => {
    instance.handleSubmit(event)
    expect(event.preventDefault).toHaveBeenCalled()
  })

})

