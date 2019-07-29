import React from 'react';
import {shallow} from 'enzyme';
import {
  Jokes,
  mapDispatchToProps,
  mapStateToProps
} from './Jokes';
import {selectFetch} from '../../apiCalls/ApiCalls';
import {
  randomJoke,
  searchJoke
} from '../../Actions/index';

// 100% Test Coverage


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

  it('handleSubmit should call viewCategory', () => {
    wrapper.setState({category: 'dog'})
    instance.viewCategory = jest.fn()
    expect(instance.viewCategory).not.toHaveBeenCalled()
    instance.handleSubmit()
    expect(instance.viewCategory).toHaveBeenCalled()
  })

  it('viewRandom should call getRandom', () => {
    expect(props.getRandomJoke).toHaveBeenCalledTimes(8)
    instance.viewRandom()
    expect(props.getRandomJoke).toHaveBeenCalledTimes(9)
  })

  it('viewRandom should set state to random', () => {
    wrapper.setState({visibleJoke: 'search'})
    expect(wrapper.state('visibleJoke')).toEqual('search')
    instance.viewRandom()
    expect(wrapper.state('visibleJoke')).toEqual('random')
  })

  it('viewCategory should call getSearchJoke', () => {
    expect(props.getSearchJoke).not.toHaveBeenCalled()
    instance.viewCategory()
    expect(props.getSearchJoke).toHaveBeenCalledTimes(1)
  })

  it('viewCategory should set state to search', () => {
    wrapper.setState({visibleJoke: 'random'})
    expect(wrapper.state('visibleJoke')).toEqual('random')
    instance.viewCategory()
    expect(wrapper.state('visibleJoke')).toEqual('search')
  })

  it('input should call handleChange on change', () => {
    expect(wrapper.state('category')).toEqual('random')
    wrapper.find('.input').simulate('change', event)
    expect(wrapper.state('category')).toEqual('batman')
  })

  it('form submit should call handleSubmit on submit', () => {
    instance.viewRandom = jest.fn()
    expect(instance.viewRandom).not.toHaveBeenCalled()
    wrapper.find('form').simulate('submit', event)
    expect(instance.viewRandom).toHaveBeenCalled()
  })

  describe('mapDispatchToProps', () => {
    it('mapDispatchToProps.getRandomJoke call dispatch', async () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = randomJoke(await selectFetch('dog'))
      const mappedProps = mapDispatchToProps(mockDispatch)
      await mappedProps.getRandomJoke()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('mapDispatchToProps.getSearchJoke should call dispatch', async () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = searchJoke(await selectFetch('dog'))
      const mappedProps = mapDispatchToProps(mockDispatch)
      await mappedProps.getSearchJoke()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

  describe('mapStateToProps', () => {
    it('mapStateToProps should contain randomJoke and searchJoke', () => {
      const mockState = {
        randomJoke: 'randomJoke',
        searchJoke: 'searchJoke'
      }
      const expected = {
        randomJoke: 'randomJoke',
        searchJoke: 'searchJoke'
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

})