import styled from "styled-components";

export const InfoWithIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

interface IconContainerProps {
    iconBg: string;
}
export const IconContainer = styled.div<IconContainerProps>`
    min-width: 2rem;
    min-height: 2rem;
    border-radius: 50%;
    position: static;

    background: ${({ iconBg }) => iconBg};
    color: ${({ theme }) => theme.colors["base-white"]};
    display: flex;
    justify-content: center;
    align-items: center;
`;