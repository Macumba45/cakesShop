import { MotionProps, motion } from 'framer-motion'
import { ElementType, FC, ReactNode, memo } from 'react'

type AnimatedComponentChild = {
    element?: ElementType
}

type AnimatedComponentProps = MotionProps & {
    children: ReactNode & AnimatedComponentChild
    element?: ElementType
}

const AnimatedTitle: FC<AnimatedComponentProps> = ({ children }) => {
    return (
        <motion.div animate={{ x: 100 }} transition={{ delay: 1 }}>
            {children}
        </motion.div>
    )
}

export default memo(AnimatedTitle)
