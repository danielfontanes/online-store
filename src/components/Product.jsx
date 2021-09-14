import styled from 'styled-components'
import { useState } from 'react';

const StyledDiv = styled.div`
    width: 200px;
    text-align: center;
    display: flex;
    flex-direction:column;
    background-color: #232F3F;
    margin: 5px;
    padding: 10px;
    color: white;
`;
const StyledAdd = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
`


const Product = ({productImg, productName, description}) => {
    const [productCounter, setProductCounter] = useState(0)
    
    return(
        <StyledDiv>
            <p>{productImg}</p>
            <h3>{productName}</h3>
            <p>{description}</p>
            <StyledAdd>
                <button>Add to cart</button>
                <button onClick={() => {setProductCounter(productCounter + 1)}}>+</button>
                <p>{productCounter}</p>
                <button onClick={() => {setProductCounter(productCounter - 1)}}>-</button>
            </StyledAdd>
        </StyledDiv>
    );
};

export default Product