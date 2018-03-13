import React from 'react'
import PropTypes from 'prop-types'

const QuestionItem = (props = defaultProps) => {
    const {id, body, slotOptions} = props.question
    return (
        <div id={id} className='question-item'>
            <p>{body}</p>
            <select id={id + '-select'} name={id + '-select'}>
                {
                    slotOptions.map((option) => {
                        <option value={option}>{option}</option>
                    })
                }
            </select>
        </div>
    )
}

QuestionItem.propTypes = {
    question : PropTypes.shape({
        id : PropTypes.string.isRequired,
        body : PropTypes.string.isRequired,
        slotOptions : PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
}

QuestionItem.defaultProps = {
    question : {
        id : 'default-id',
        body : 'What color is the {{slot}}?',
        slotOptions : ['sky', 'cat', 'hat']
    }
}

export default QuestionItem
