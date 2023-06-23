import { FC, memo } from 'react'
import { MainContainer } from './style'
import HoverMotion from '../../animations/hover'
import { Button } from '@mui/material'
import { Props } from './type'
import { motion } from 'framer-motion'

const ButtonComp: FC<Props> = ({
  title,
  icon,
  bgColor,
  marginBottom,
  border,
  href,
  style,
  variant,
  color,
  fontFamily,
  initial,
}) => {
  const ButtonStyles = {
    backgroundColor: bgColor,
    color: color || '#F7F7F7',
    marginBottom: marginBottom || '1rem',
    marginLeft: '1rem',
    marginRight: '1rem',
    border: border,
    fontSize: '1rem',
    width: '280px',
    cursor: 'pointer',
    opacity: 0,
    fontFamily: fontFamily,
  }

  return (
    <HoverMotion>
      <MainContainer>
        <motion.div
          initial={typeof initial === 'number' ? { x: initial } : initial}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.43, 0.13, 0.23, 0.96],
          }} // transición lenta
        >
          <Button
            target="blank"
            style={style || ButtonStyles}
            href={href}
            variant={variant as 'text' | 'outlined' | 'contained'} // Añadir el tipo correcto para la prop variant
            component={motion.a}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.43, 0.13, 0.23, 0.96],
            }} // transición lenta
          >
            {title}
            {icon}
          </Button>
        </motion.div>
      </MainContainer>
    </HoverMotion>
  )
}

export default memo(ButtonComp)
