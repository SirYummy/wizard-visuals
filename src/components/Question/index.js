import PropTypes from 'prop-types'

const Question = (props) => {
    return (props.questionRenderer)
}

Question.propTypes = {
    questionRenderer : PropTypes.element.isRequired
}

export default Question