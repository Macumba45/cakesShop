import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 100vh;
    background-size: cover;
    ::before{
        content: '';
        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        top: 0;
        left: 0;
    
    }

`

export const Content = styled.video`

    width: 100%;
    height: 100vh;
    object-fit: cover;
    background-size: cover;

`
