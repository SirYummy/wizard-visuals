import React from 'react'
import { expect } from 'code'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import App from './index'

describe(`App`, () => {
    describe('when it mounts', () => {
        let component
        beforeEach(() => {
            component = shallow(<App/>)
        })
        it('exists', () => {
            expect(component.exists()).to.be.true()
        })
        it('renders a `div`', () => {
            expect(component.type()).to.equal('div')
        })

        it('contains a `QuestionList`', () => {
            expect(component.find(`QuestionList`)).to.have.length(1)
        })

        it(`also contains a \`ChartIntent\``, () => {
            expect(component.find(`ChartIntent`)).to.have.length(1)
        })

    })
})