import styled from "styled-components";

export const CompleteOrderContainer = styled.form`
    margin-top: 2.5rem;
    display: flex;
    margin-top: 2.rem;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;

    @media(max-width: 1200px) {
        flex-wrap: wrap;
        margin: 0 2rem;
        justify-content: center;
    }
`;

export const SectionBaseStyle = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px;
    padding: 2.5rem;
`;