import { MotionProps, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ElementType, FC, ReactNode, memo } from 'react'

type AnimatedComponentChild = {
  element?: ElementType
}

type AnimatedComponentProps = MotionProps & {
  children: ReactNode & AnimatedComponentChild
  element?: ElementType
}

const AnimatedView: FC<AnimatedComponentProps> = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      exit="exit"
      variants={containerVariants}
      ref={ref}
    >
      {children}
    </motion.div>
  )
}

export default memo(AnimatedView)
