import styled from "styled-components";

export const Container = styled.button`
    background: ${({theme}) => theme.COLORS.BACKGROUND_700};

    width: 100%;
    padding: 2.2rem;
    margin-bottom: 1.6rem;

    border: none;
    border-radius: 1rem;

    > h1 {
        color: ${({theme}) => theme.COLORS.WHITE};

        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 2.4rem;
    }

    >footer {
        width: 100%;
        display: flex;
        margin-top: 2.4rem;
    }
`;