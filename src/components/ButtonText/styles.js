import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;
    font-size: 1.6rem;
    color: ${({theme, $isactive}) => $isactive ? theme.COLORS.ORANGE : theme.COLORS.GREY_100};
`;