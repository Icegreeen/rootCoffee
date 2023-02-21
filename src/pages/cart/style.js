import styled from 'styled-components';

export const CartT = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Left = styled.div`
    flex: 1;
    margin-right: 20px;
    padding: 3rem;
`;

export const Right = styled.div`
    flex: 1;
    margin-left: 20px;
    
`;

export const CartItemsT = styled.div`
  background-color: #fff;
  border-radius: 5px;

  display: flex;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 20px;

  img {
    width: 200px;
  }
`;

export const Description = styled.div`
    font-size: 30px;
    background: #f5f5f5;
`;

export const CountHandle = styled.div`
    input {
        width: 40px;
        text-align: center;
        font-weight: bolder;
    }
`;

export const Checkout = styled.div`
    width: 150px;
    height: 50px;
    background-color: rgb(19, 19, 19);
    color: white;
    border: none;
    border-radius: 8px;
    margin: 10px;
    cursor: pointer;
`;
