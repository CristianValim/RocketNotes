import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background: ${({ theme, isNew }) => isNew? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GREY_300};

    border: ${({ theme, isNew }) => isNew? `.1rem dashed ${theme.COLORS.GREY_300}` : 'none' };

    margin-bottom: .8rem;
    border-radius: 1rem;
    padding: 1.5rem;

    >button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    >input {
        height: 3rem;
        width: 100%;

        padding: 1.2rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;
        
        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GREY_300};
        }
    }
`
