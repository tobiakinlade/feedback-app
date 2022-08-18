import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

export default function List({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item, index) => (
        <FeedbackItem key={index} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  )
}

List.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}
