import React from 'react';
import {shallow} from 'enzyme';
import {
  Jokes,
  mapDispatchToProps,
  mapStateToProps
} from './Jokes';


describe('Jokes', () => {
  let wrapper, instance
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

})