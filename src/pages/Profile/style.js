import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    >header {
        width: 100%;
        padding: 7rem 10rem;
        background: ${({theme}) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;
        svg {
           color: ${({theme}) => theme.COLORS.GREY_100};
           font-size: 2.4rem;
        }
    }
`;

export const Form = styled.form`
    max-width: 34rem;
    margin: -9rem auto 0;

    > div:nth-child(4), Button{
        margin-top: 2.4rem;
    }

`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 3.2rem;
    width: 18.6rem;
    height: 18.6rem;

    >img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
    }

    >label {
        width: 4.8rem;
        height: 4.8rem;
        background: ${({theme}) => theme.COLORS.ORANGE};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: .7rem;
        right: .7rem;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;
        }
    }
`;
