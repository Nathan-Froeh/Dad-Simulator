import React from 'react';
import {shallow} from 'enzyme';
import {
  Advice,
  mapDispatchToProps,
  mapStateToProps
} from './Advice';
import {
  randomAdvice,
  searchAdvice
} from '../../Actions/index';
import {selectFetch} from '../../apiCalls/ApiCalls';

// 86.36 |      100 |    72.73 |       90 
// 73,75


describe('Advice', () => {
  let wrapper, instance
  const props = {
    getRandomAdvice: jest.fn(),
    getSearchAdvice: jest.fn(),
    randomAdvice: 'randomAdvice',
    searchAdvice: 'searchAdvice'
  }
  const event = {
    preventDefault: jest.fn(),
    target: {
      value: 'BATMAN'
    }
  }
  beforeEach(() => {
    wrapper = shallow(<Advice {...props}/>)
    instance = wrapper.instance()
  })

  it('should match snap shot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('componentDidMount should call handleSubmit', () => {
    instance.handleSubmit = jest.fn()
    instance.componentDidMount()
    expect(instance.handleSubmit).toHaveBeenCalled()
  })

  it('handleChange sets state of category to lowercase batman', () => {
    expect(wrapper.state('category')).toEqual('random')
    instance.handleChange(event)
    expect(wrapper.state('category')).toEqual('batman')
  })

  it('handleSubmit contains e.preventDefault', () => {
    instance.handleSubmit(event)
    expect(event.preventDefault).toHaveBeenCalled()
  })

  it('handleSubmit should call viewRandom', () => {
    instance.viewRandom = jest.fn()
    expect(instance.viewRandom).not.toHaveBeenCalled()
    instance.handleSubmit(event)
    expect(instance.viewRandom).toHaveBeenCalled()
  })

  it('handleSubmit should call viewCategory', () => {
    wrapper.setState({category: 'dog'})
    instance.viewCategory = jest.fn()
    expect(instance.viewCategory).not.toHaveBeenCalled()
    instance.handleSubmit(event)
    expect(instance.viewCategory).toHaveBeenCalled()
  })

  it('viewRandom should call getRandomAdvice', () => {
    expect(props.getRandomAdvice).toHaveBeenCalledTimes(8)
    instance.viewRandom()
    expect(props.getRandomAdvice).toHaveBeenCalledTimes(9)
  })

  it('viewRandom should setState visibleAdvice to random', () => {
    wrapper.setState({visibleAdvice: 'search'})
    expect(wrapper.state('visibleAdvice')).toBe('search')
    instance.viewRandom()
    expect(wrapper.state('visibleAdvice')).toBe('random')
  })

  it('viewCategory should call getSearchAdvice', () => {
    expect(props.getSearchAdvice).toHaveBeenCalledTimes(0)
    instance.viewCategory()
    expect(props.getSearchAdvice).toHaveBeenCalledTimes(1)
  })

  it('viewCategory should setState visibleAdvice to random', () => {
    wrapper.setState({visibleAdvice: 'random'})
    expect(wrapper.state('visibleAdvice')).toBe('random')
    instance.viewCategory()
    expect(wrapper.state('visibleAdvice')).toBe('search')
  })

  it('should call handleSubmit on submit', () => {
    instance.handleSubmit = jest.fn()
    wrapper.setState({category: 'random'})
    expect(instance.handleSubmit).toHaveBeenCalledTimes(0)
    wrapper.find('form').simulate('submit')
    expect(instance.handleSubmit).toHaveBeenCalledTimes(1)
  })

  it('should call handleSubmit on submit', () => {
    instance.handleSubmit = jest.fn()
    wrapper.setState({visibleAdvice: 'search'})
    expect(instance.handleSubmit).toHaveBeenCalledTimes(0)
    wrapper.find('form').simulate('submit')
    expect(instance.handleSubmit).toHaveBeenCalledTimes(1)
  })

  describe('mapDispatchToProps', () => {
    xit('mapDispatchToProps.getRandomAdvice should be jest.fn()', async () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = randomAdvice(await selectFetch('random'))
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.getRandomAdvice('random')
    
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    xit('mapDispatchToProps.getSearchAdvice should be jest.fn()', async () => {
    
    })
  })
  describe('mapStateToProps', () => {

    it('randomAdvice should have a state of randomAdvice', () => {
      const mockState = {
        randomAdvice: 'randomAdvice',
        searchAdvice: 'searchAdvice'
      }
      const expected = {
        randomAdvice: 'randomAdvice',
        searchAdvice: 'searchAdvice'
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

})

