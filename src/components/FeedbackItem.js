import { useState } from 'react'

export default function FeedbackItem({ item }) {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is an example of a feedback item')

  const handleClick = () => {
    setRating(10)
  }
  return (
    <div className='card'>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </div>
  )
}
