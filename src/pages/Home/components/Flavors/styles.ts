import styled from "styled-components";

export const FlavorsContainer = styled.section`
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

export const CoffeeList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin-top: 3.5rem;
    @media (max-width: 1020px) {
        grid-template-columns: repeat(2, 2fr);
        column-gap: 1.5rem;
    };
    @media (max-width: 500px){
        display: flex;
        flex-wrap: wrap;
    }
`;

export const BorderSeparator = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
`;
