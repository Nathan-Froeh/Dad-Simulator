import React from 'react';
import {
  Facts,
  mapDispatchToProps,
  mapStateToProps
} from './Facts';
import {shallow} from 'enzyme';

// 70 |      100 |       50 |     87.5 
// 35

describe('Facts', () => {
  let wrapper, instance
  const props = {
    getRandomFacts: jest.fn(),
    randomFact: 'randomFact'
  }
  beforeEach(() => {
    wrapper = shallow(<Facts {...props}/>)
    instance = wrapper.instance()
  })

  it('Fatcs should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('componentDidMount should call getFact', () => {
    instance.getFact = jest.fn()
    expect(instance.getFact).toHaveBeenCalledTimes(0)
    instance.componentDidMount()
    expect(instance.getFact).toHaveBeenCalledTimes(1)
  })

  it('getFact should call getRandomFacts', () => {
    expect(props.getRandomFacts).toHaveBeenCalledTimes(3)
    instance.getFact()
    expect(props.getRandomFacts).toHaveBeenCalledTimes(4)
  })  

  xit('should call getFact on click', () => {
    wrapper.instance().getFact = jest.fn()
    wrapper.find('button').simulate('click')
    expect(wrapper.instance().getFact).toHaveBeenCalled()
  })


  describe('mapDispatchToProps', () => {

  })  

  describe('mapStateToProps', () => {
    it('randomFact should have a state of randomFact', () => {
      const mockState = {
        randomFact: 'randomFact'
      }
      const expected = {
        randomFact: 'randomFact'
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
})