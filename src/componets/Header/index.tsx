import { FC, memo } from 'react'
import {
  VideoContainer,
  MainContainer,
  Video,
  TitleContainer,
  TitleHeader,
  Span,
} from './style'
const videoHeader = require('../../assets/video3.mp4')
const Header: FC = () => {
  return (
    <>
      <MainContainer>
        <TitleContainer>
          <TitleHeader>
            La vida es incierta, <br /> <Span>Cómete el postre primero</Span>
          </TitleHeader>
        </TitleContainer>
        <VideoContainer>
          <Video src={videoHeader} autoPlay loop muted playsInline />
        </VideoContainer>
      </MainContainer>
    </>
  )
}

export default memo(Header)
