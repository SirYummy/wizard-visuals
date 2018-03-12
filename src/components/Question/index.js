import React from 'react'
import PropTypes from 'prop-types'
import config from '../../config'

const Question = (props) => {

    let questionObject = config.questions.filter((question) => question.id === props.questionId)[0]
    
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
    
    return (
        <div dangerouslySetInnerHTML={{__html:questionBody}} />
    )
}

Question.propTypes = {
    questionId : PropTypes.string.isRequired
}

export default Question
