import React from 'react'
import { expect } from 'code'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import QuestionItem from './index'

describe(`<Question />`, () => {
    let component

    beforeEach(() => {
        component = shallow(<QuestionItem />)
    })
    
    it('exists', () => {
        expect(component.exists()).to.be.true()
    })

    it('is a div')
    it('renders a `<p>` with a question in it')
    it('renders `<select />` with slot options')

})