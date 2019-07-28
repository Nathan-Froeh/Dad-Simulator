import React from 'react';
import {
  Facts,
  mapDispatchToProps,
  mapStateToProps
} from './Facts';
import {shallow} from 'enzyme';


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


  describe('mapDispatchToProps', () => {

  })  

  describe('mapStateToProps', () => {

  })
})