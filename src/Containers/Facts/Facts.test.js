import React from 'react';
import {
  Facts,
  mapDispatchToProps,
  mapStateToProps
} from './Facts';
import {shallow} from 'enzyme';


describe('Facts', () => {
  let wrapper
  const props = {
    getRandomFacts: jest.fn(),
    randomFact: 'randomFact'
  }
  beforeEach(() => {
    wrapper = shallow(<Facts {...props}/>)
  })

  it('Fatcs should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })


  describe('mapDispatchToProps', () => {

  })  

  describe('mapStateToProps', () => {

  })
})