import React from 'react';
import {
  App,
  mapDispatchToProps
} from './App';
import {shallow} from 'enzyme';
import {factOfTheDay} from '../../Actions/index';
import {selectFetch} from '../../apiCalls/ApiCalls';

// 100% Test Coverage

describe('App', () => {
  let wrapper
  const props = {
    getFactOfTheDay: jest.fn()
  }
  beforeEach(() => {
    wrapper = shallow(<App {...props}/>)
  })

  it('App should mathc snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('componentDidMount should call getFactOfTheDay', () => {
    expect(props.getFactOfTheDay).toHaveBeenCalledTimes(2)
    wrapper.instance().componentDidMount()
    expect(props.getFactOfTheDay).toHaveBeenCalledTimes(3)
  })

  describe('mapDispatchToProps', () => {

    it('getFactOfTheDay should be called with factOfTheDay()', async () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = factOfTheDay(await selectFetch(''))
      const mappedProps = mapDispatchToProps(mockDispatch)
      await mappedProps.getFactOfTheDay()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

})
