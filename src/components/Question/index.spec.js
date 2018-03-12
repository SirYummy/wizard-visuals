import React from 'react'
import { expect } from 'code'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import Question from './index'
import config from '../../config'

describe(`<Question />`, () => {
    let component
    let questionId
    let questionObject

    beforeEach(() => {
        questionId = 'question-1'
        questionObject = config.questions.filter((question) => question.id === questionId)[0]
        component = shallow(<Question questionId={questionId} />)
    })
    it('exists', () => {
        expect(component.exists()).to.be.true()
    })
    it('replaces `{{slot}}` with `<select />`', () => {
        let slotOptionsReducer = (accumulator, currentValue) => {
            return accumulator + `<option value="${currentValue}">${currentValue}</option>`
        }
    
        let slotOptions = questionObject.slotOptions.reduce(slotOptionsReducer)
        let slotSelect = 
            `<select 
                autoFocus="true" 
                name="slot options" 
                id="${questionObject.id}-slot-options"
            >
                ${slotOptions}
            </select>`

        let questionBody = questionObject.body.replace('{{slot}}', slotSelect)
        
        expect(questionBody).to.equal(
            questionBody
        )
    })


})