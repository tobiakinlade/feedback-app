import FeedbackItem from './FeedbackItem'

export default function List({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item, index) => (
        <FeedbackItem key={index} item={item} />
      ))}
    </div>
  )
}
