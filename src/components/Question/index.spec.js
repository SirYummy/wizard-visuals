import React from 'react'
import { expect } from 'code'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import Question from './index'

describe(`<Question />`, () => {
    let component
    let questionRendererPropValue

    beforeEach(() => {
        questionRendererPropValue = <deev>I am the rendered question.</deev>
        component = shallow(<Question questionRenderer={questionRendererPropValue} />)
    })
    it('exists', () => {
        expect(component.exists()).to.be.true()
    })
    it('renders whatever was passed in as the `questionRenderer` prop value.  In this case, a `deev`', () => {
        expect(component.type()).to.equal('deev')
    })


})