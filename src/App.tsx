import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { Reset } from 'styled-reset'
import Router from './router'
import './App.css'

function App(): JSX.Element {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Reset />
                <Router />
            </ThemeProvider>
        </>
    )
}

export default App
