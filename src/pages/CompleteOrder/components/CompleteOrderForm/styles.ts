import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const CompleteOrderFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 40rem;
    height: 100%;
    margin-bottom: 1rem;
    @media (max-width: 1020px){
        width:100%;
    }
`;

export const FormSectionContainer = styled(SectionBaseStyle)`
    display:flex;
    flex-direction: column;
    gap: 2rem;
`;

export const AddressFormContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 15rem;
    column-gap: 0.75rem;
    row-gap: 1rem;

    .address{
        grid-column: span 2;
    }

    @media (max-width: 1020px){
        column-gap: 0.25rem;
        row-gap: .5rem;
    }
    @media (max-width: 500px){
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const PaymentMethodOptionsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;

    > p {
        grid-column: span 3;
        color: ${({ theme }) => theme.colors["base-error"]};
        font-size: 0.875rem;
    }
    
    @media(max-width:450px){
        display: flex;
        flex-wrap: wrap;
    }
`;