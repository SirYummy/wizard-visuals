import React from 'react'
import config from '../../config'
import Question from '../Question'

export default (props) => {
    
    return (
        <div>
            <code>wizard-visuals</code>
            <Question questionRenderer={<h3>{config.questions[0]}</h3>} />        
        </div>
    )
}