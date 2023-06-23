import styled from 'styled-components'

export const MainContainer = styled.header`
  display: flex;
  justify-content: center;
`

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`

export const Video = styled.video`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  text-align: center;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 10rem;
  @media screen and (max-width: 600px) {
    margin-top: 15rem;

  }
`

export const TitleHeader = styled.h1`
  font-family: ${({ theme }) => theme.fonts.roselina};
  color: ${({ theme }) => theme.colors.rosaPastel};
  font-size: 10rem;
  z-index: 999;
  line-height: 10rem;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 6rem;
    line-height: 5rem;
  }
`

export const ButtonContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    z-index: 444;
    margin-top: 40rem;


    @media screen and (max-width: 600px) {
        margin-top: 35rem;
        flex-direction: column;
    }
`

export const Span = styled.span`
  font-family: ${({ theme }) => theme.fonts.roselina};
  color: ${({ theme }) => theme.colors.azulClaro};
  font-size: 6rem;
  font-weight: 700;
  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`

export const SpanBold = styled.span`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  line-height: 5rem;

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`
