import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 2rem; 
`;

export const Card = styled.div`
    width: 16%;
    margin-bottom: 16px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 16px;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }

    @media (max-width: 768px) {
        width: 30%;
        margin: 0.2rem;
    }

    :hover {
        transition: 0.3s ease-in;
    }

`;

export const AddToCartBttn = styled.button`
    background-color: transparent;
    border: 2px solid rgb(19, 19, 19);
    min-width: 100px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 15px;

    :hover {
        background-color: rgb(19, 19, 19);
        color: white;
        cursor: pointer;
    }
`;





