import React from 'react'
import { expect } from 'code'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import App from './index'
import Question from '../Question'

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

        it('contains a `Question`', () => {
            expect(component.find(Question)).to.have.length(1)
        })

        it('renders the question as an `h3`', () => {
            expect(component.find(Question).dive().find('h3')).to.have.length(1)
        })
    })
})