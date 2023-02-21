import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    height: 80px;
    background-color: rgb(19,19,19);
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const Links = styled.div`
    margin-right: 50px;
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        color: white;
        margin-left: 20px;
        font-size: 25px;
    }
`;


