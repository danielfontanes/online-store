import Product from "./components/Product";
import Nav from "./components/Nav";
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;


function App() {
  return (
    <>
      <h1>Online store</h1>
      <Nav/>
      <StyledDiv>
        <Product productImg={"white t-shirt img"} productName={"white t-shirt"} description={"it's a white t-shirt"}/>
        <Product productImg={"black t-shirt img2"} productName={"black t-shirt"} description={"it's a black t-shirt"}/>
        <Product productImg={"gray t-shirt img3"} productName={"gray t-shirt"} description={"it's a gray t-shirt"}/>
        <Product productImg={"blue t-shirt img4"} productName={"blue t-shirt"} description={"it's a blue t-shirt"}/>
        <Product productImg={"red t-shirt img5"} productName={"red t-shirt"} description={"it's a red t-shirt"}/>
        <Product productImg={"beige t-shirt img5"} productName={"beige t-shirt"} description={"it's a beige t-shirt"}/>
      </StyledDiv>
    </>
  );
}

export default App;
