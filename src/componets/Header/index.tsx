import { FC, memo } from 'react'
import ButtonComp from '../Button'
import {
  VideoContainer,
  MainContainer,
  Video,
  TitleContainer,
  TitleHeader,
  Span,
  ButtonContainer,
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
        <ButtonContainer>
          <ButtonComp
            href="https://calendly.com/agendagrowthboosters"
            title="Mis productos"
            variant='contained'
            bgColor='#FFB6C1'
            initial={-  1000}
          />
          <ButtonComp
            href="https://calendly.com/agendagrowthboosters"
            title="Mis recetas"
            variant='outlined'
            border='1px dashed #FFB6C1'
            initial={1000}

          />
        </ButtonContainer>
        <VideoContainer>
          <Video src={videoHeader} autoPlay loop muted playsInline />
        </VideoContainer>
      </MainContainer>
    </>
  )
}

export default memo(Header)
