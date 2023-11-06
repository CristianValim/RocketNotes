import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    font-weight: 500;

    height: 5.6rem;
    border: 0;
    padding: 0 1.6rem;
    margin-top: 12rem;
    border-radius: 1rem;

    &:disabled {
        opacity: 0.5;
    }
`