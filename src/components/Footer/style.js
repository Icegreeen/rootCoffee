import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 100%;
    height: 4rem;
    background-color: #17181b;
    display: flex !important;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3.5rem;
`;

export const FooterContent = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;

    p {
        color: #f5f5f5;
        font-size: 0.9rem;
    }

    @media (max-width: 768px) {
        p {
            color: #f5f5f5;
            font-size: 0.7rem;
        }
    }
`;

export const SocialList = styled.div`
    a {
        margin: 0 15px;
    }
    ul {
        display: flex;
    }

`;


