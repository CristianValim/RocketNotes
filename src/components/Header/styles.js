import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.header`
    grid-area: header;
    height: 10.5rem;
    width: 100%;
    padding: 0 8rem;

    border-bottom: .1rem solid ${({theme}) => theme.COLORS.BACKGROUND_900};

    display: flex;
    justify-content: space-between;
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1.6rem;

    > img {
        height: 7rem;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        line-height: 2.4rem;

        span {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.GREY_100};
        }
        strong {
            font-size: 1.8rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Logout = styled.button`
    background: none;
    border: none;

     > svg {
        font-size: 3.6rem;
        color: ${({theme}) => theme.COLORS.GREY_100};
     }
`