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
            onClick={() => console.log('hola')}
            title="Mis productos"
            variant="contained"
            bgColor="#FFB6C1"
            initial={-1000}
            color='black'

          />
          <ButtonComp
            onClick={() => console.log('hola')}
            title="Mis recetas"
            variant="outlined"
            bgColor='#B0E0E6'
            border="1px dashed #B0E0E6"
            color='black'

            initial={1000}
          />
          <ButtonComp
            onClick={() => console.log('hola')}
            title="Mi blog"
            variant="outlined"
            border="1px dashed #98FF98"
            bgColor='#98FF98'
            color='black'
            initial={1000}
          />
          <ButtonComp
            onClick={() => console.log('hola')}
            color='black'
            title="Otras cosas"
            variant="outlined"
            bgColor='#704241'
            border="1px dashed #704241"
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
