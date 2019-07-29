import React from 'react';
import {shallow} from 'enzyme';
import {
  Home,
  mapDispatchToProps,
  mapStateToProps
} from './Home';
import {selectFetch} from '../../apiCalls/ApiCalls';
import {factOfTheDay} from '../../Actions/index';


// 80 |      100 |    66.67 |     87.5
// 35

describe('Home', () => {
  let wrapper, instance
  const props = {
    getFactOfTheDay: jest.fn(),
    factOfTheDay: 'factOfTheDay'
  }
  beforeEach(() => {
    wrapper = shallow(<Home{...props}/>)
    instance = wrapper.instance()
  })

  it('Home should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('componentDidMount should call isFactLoaded', () => {
    instance.isFactLoaded = jest.fn()
    expect(instance.isFactLoaded).not.toHaveBeenCalled()
    instance.componentDidMount()
    expect(instance.isFactLoaded).toHaveBeenCalled()
  })

  it('isFactLoaded should not call getFactOfTheDay', () => {
    expect(props.getFactOfTheDay).not.toHaveBeenCalled()
    instance.isFactLoaded()
    expect(props.getFactOfTheDay).not.toHaveBeenCalled()
  })

  it('isFactLoaded should call getFactOfTheDay', () => {
    wrapper.setProps({factOfTheDay: ''})
    expect(props.getFactOfTheDay).not.toHaveBeenCalled()
    instance.isFactLoaded()
    expect(props.getFactOfTheDay).toHaveBeenCalled()
  })

  describe('mapDispatchToProps', () => {

    it('mapDispatchToProps.getRandomFacts should be jest.fn()', async () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = factOfTheDay(await selectFetch('dog'))
      const mappedProps = mapDispatchToProps(mockDispatch)
      await mappedProps.getFactOfTheDay()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
    
  })  

  describe('mapStateToProps', () => {
    it('factOfTheDay should have a state of factOfTheDay', () => {
      const mockState = {
        factOfTheDay: 'factOfTheDay'
      }
      const expected = {
        factOfTheDay: 'factOfTheDay'
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
})