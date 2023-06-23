import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { Reset } from 'styled-reset'
import Router from './router'
import './App.css'
import { useEffect, useState } from 'react'
import CircularStatic from './components/LoaderWeb'

function App(): JSX.Element {
    // useEffect(() => {
    //     const loader = document.querySelector('header') as HTMLElement
    //     console.log(loader)
    //     loader.style.display = 'none'

    //     setTimeout(() => {
    //         return <CircularStatic />
    //     }, 5000)

    //     setTimeout(() => {
    //         loader.style.display = 'flex'
    //     }, 5000)
    // }, [])

    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {
        const loader = document.querySelector('header') as HTMLElement
        console.log(loader)
        loader.style.display = 'none'

        const timer = setTimeout(() => {
            setShowLoader(false)
            loader.style.display = 'flex'
        }, 2000)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    return (
        <>
            {showLoader ? <CircularStatic /> : null}
            <ThemeProvider theme={theme}>
                <Reset />
                <Router />
            </ThemeProvider>
        </>
    )
}

export default App
