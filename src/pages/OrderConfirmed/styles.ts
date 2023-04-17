import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 5rem;

    h1{
        color:${({ theme }) => theme.colors["brand-yellow-dark"]};
    }

    > section {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media(max-width: 1200px){
            flex-wrap: wrap;
        }
        @media(max-width: 600px){
            img{
                display: none;
            }
        }
    }
`;

export const OrderDetailsContainer = styled.div`
    padding: 2rem;
    border-radius: 6px 36px 6px 36px;
    background: ${({ theme }) => theme.colors["base-background"]};
    min-width: 32rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;

    @media(max-width: 1200px){
        min-width: 100%;
    }

    &::before {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: 7px 37px 7px 37px;
        background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
        z-index: -1;
    }
`;

