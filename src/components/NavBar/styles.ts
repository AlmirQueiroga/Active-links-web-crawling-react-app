import styled from 'styled-components';

export const Container = styled.header`
    max-width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    background-color: ${({ theme: { colors: { surface } } }) => surface};
    box-shadow: 0px 11px 15px -3px rgba(0,0,0,0.05);
    position: relative;

    @media (min-width: 0px) {
        justify-content: center;
     }

    @media (min-width: 992px) { 
        justify-content: center;
     }
`;

export const Brand = styled.img`
    height: 40px;
    width: 40px;
    padding: 8px;
    background-color: ${({ theme: { colors: { primary } } }) => primary};
    border-radius: ${({ theme: { border } }) => border};
`;
