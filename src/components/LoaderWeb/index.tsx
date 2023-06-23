import * as React from 'react'
import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number }
) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
                sx={{ color: '#FFB6C1' }}
                variant="determinate"
                {...props}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="#FFB6C1"
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    )
}

export default function CircularStatic() {
    const [progress, setProgress] = React.useState(0)

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prevProgress =>
                prevProgress >= 100 ? 0 : prevProgress + 50
            )
        }, 800)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div
            style={{
                backgroundColor: '#B0E0E6',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
            }}
        >
            <CircularProgressWithLabel value={progress} />
        </div>
    )
}
