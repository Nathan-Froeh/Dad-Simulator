import React from 'react';
import {
  Facts,
  mapDispatchToProps,
  mapStateToProps
} from './Facts';
import {shallow} from 'enzyme';
import {selectFetch} from '../../apiCalls/ApiCalls';
import {randomFact} from '../../Actions/index';

// 100% Test Coverage

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

  it('should call getRandomFacts on click', () => {
    expect(props.getRandomFacts).toHaveBeenCalledTimes(5)
    wrapper.find('button').simulate('click')
    expect(props.getRandomFacts).toHaveBeenCalledTimes(6)
  })


  describe('mapDispatchToProps', () => {

    it('mapDispatchToProps.getRandomFacts should be jest.fn()', async () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = randomFact(await selectFetch('dog'))
      const mappedProps = mapDispatchToProps(mockDispatch)
      await mappedProps.getRandomFacts()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

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