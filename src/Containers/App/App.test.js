import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {shallow} from 'enzyme';


// 60 |      100 |       50 |       75 
// 55

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

})
