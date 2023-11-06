import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 15rem;
    margin-bottom: 8rem;
    padding: 1.6rem;

    background: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};

    border: none;
    border-radius: 1rem;
    resize: none;

    &::placeholder {
        color: ${({theme}) => theme.COLORS.GREY_300};
    }
`;