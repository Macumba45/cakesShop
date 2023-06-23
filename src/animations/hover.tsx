import { motion } from 'framer-motion'
import { ReactNode } from 'react';

interface HoverMotionProps {
  children: ReactNode;
}

const HoverMotion = ({ children }: HoverMotionProps) => {
  return <motion.div whileHover={{ scale: 1.05 }}>{children}</motion.div>
}

export default HoverMotion
