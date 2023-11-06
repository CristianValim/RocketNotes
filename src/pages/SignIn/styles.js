import styled from 'styled-components';
import background from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    height: 100vh;
    padding: 0 7rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >h1 {
        font-size: 4.8rem;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }

    >h2 {
        margin: 4.8rem auto;
        font-size: 2.4rem;
    }

    >p {
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.GREY_100};
    }

    >a {
        margin-top: 12.4rem;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${background}) no-repeat center center;
    background-size: cover;
`;