import styled from "styled-components";

export const Container = styled.section`
    margin: 2.8rem 0 0;

        > h2 {
            font-size: 2rem;
            font-weight: 400; 
            color: ${({theme}) => theme.COLORS.GREY_100};

            padding-bottom: 1.6rem;
            margin-bottom: 2.8rem;
            border-bottom: .1rem solid ${({theme}) => theme.COLORS.BACKGROUND_700};
        }

        > 
`;
