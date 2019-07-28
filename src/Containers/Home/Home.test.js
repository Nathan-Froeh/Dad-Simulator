import React from 'react';
import {shallow} from 'enzyme';
import {
  Home,
  mapDispatchToProps,
  mapStateToProps
} from './Home';


// 70 |      100 |       50 |     87.5
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