import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'

import FeedbackContext from '../context/FeedbackContext'

export default function List() {
  const { feedback } = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={index} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
