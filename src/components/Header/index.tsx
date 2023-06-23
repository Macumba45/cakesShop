import { FC, memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonComp from '../Button'
import CakeIcon from '@mui/icons-material/Cake'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import LocalActivityIcon from '@mui/icons-material/LocalActivity'
import CircularStatic from '../LoaderWeb'
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
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const iconStyle = {
        color: 'black',
        fontSize: '1.5rem',
        marginRight: '1rem',
    }

    const goToProducts = useCallback(() => {
        const loader = document.querySelector('header') as HTMLElement
        loader.style.display = 'none'
        setLoading(true)
        setTimeout(() => {
            {
                navigate('/productos')
            }
        }, 2000)
    }, [navigate])

    return (
        <>
            {loading ? <CircularStatic /> : null}
            <MainContainer>
                <VideoContainer>
                    <Video src={videoHeader} autoPlay loop muted playsInline />
                </VideoContainer>
                <TitleContainer>
                    <TitleHeader>
                        La vida es incierta, <br />{' '}
                        <Span>Cómete el postre primero</Span>
                    </TitleHeader>
                </TitleContainer>
                <ButtonContainer>
                    <ButtonComp
                        onClick={() => goToProducts()}
                        title="Mis productos"
                        variant="contained"
                        bgColor="#FFB6C1"
                        initial={-100}
                        color="black"
                        icon={<CakeIcon style={iconStyle} />}
                    />
                    <ButtonComp
                        onClick={() => console.log('hola')}
                        title="Mis recetas"
                        variant="outlined"
                        bgColor="#B0E0E6"
                        border="1px dashed #B0E0E6"
                        color="black"
                        initial={-100}
                        icon={<ReceiptLongIcon style={iconStyle} />}
                    />
                    <ButtonComp
                        onClick={() => console.log('hola')}
                        title="Mi blog"
                        variant="outlined"
                        border="1px dashed #98FF98"
                        bgColor="#98FF98"
                        color="black"
                        initial={100}
                        icon={<OndemandVideoIcon style={iconStyle} />}
                    />
                    <ButtonComp
                        onClick={() => console.log('hola')}
                        color="black"
                        title="Otras cosas"
                        variant="outlined"
                        bgColor="#704241"
                        border="1px dashed #704241"
                        initial={100}
                        icon={<LocalActivityIcon style={iconStyle} />}
                    />
                </ButtonContainer>
            </MainContainer>
        </>
    )
}

export default memo(Header)
