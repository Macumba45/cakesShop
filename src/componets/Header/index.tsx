import { FC, memo } from 'react'
import { Container, Content } from './style'
const videoHeader = require('../../assets/video.mp4')
const Header: FC = () => {

  return (
    <Container>
      <Content
        src={videoHeader}
        autoPlay
        muted
        loop

      />
    </Container>
  )
}

export default memo(Header)
