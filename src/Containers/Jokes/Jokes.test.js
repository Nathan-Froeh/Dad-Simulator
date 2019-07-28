import React from 'react';
import {shallow} from 'enzyme';
import {
  Jokes,
  mapDispatchToProps,
  mapStateToProps
} from './Jokes';


describe('Jokes', () => {
  let wrapper, instance
  const event = {
    preventDefault: jest.fn(),
    target: {
      value: 'BATMAN'
    }
  }
  const props = {
    getRandomJoke: jest.fn(),
    getSearchJoke: jest.fn(),
    randomJoke: 'randomJoke',
    searchJoke: 'searchJoke'
  }

  beforeEach(() => {
    wrapper = shallow(<Jokes{...props}/>)
    instance = wrapper.instance()

  })


  it('Jokes should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('componentDidMount should call handleSubmit', () => {
    instance.handleSubmit = jest.fn()
    expect(instance.handleSubmit).not.toHaveBeenCalled()
    instance.componentDidMount()
    expect(instance.handleSubmit).toHaveBeenCalled()
  })

  it('handleChange should set category state in lower case', () => {
    expect(wrapper.state('category')).toEqual('random')
    instance.handleChange(event)
    expect(wrapper.state('category')).toEqual('batman')
  })

  it('handleSubmit should run preventDefault', () => {
    expect(event.preventDefault).not.toHaveBeenCalled()
    instance.handleSubmit(event)
    expect(event.preventDefault).toHaveBeenCalled()
  })

  it('handleSubmit should call viewRandom', () => {
    wrapper.setState({category: 'random'})
    instance.viewRandom = jest.fn()
    expect(instance.viewRandom).not.toHaveBeenCalled()
    instance.handleSubmit()
    expect(instance.viewRandom).toHaveBeenCalled()
  })

})