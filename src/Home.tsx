import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <RouterButton>
        <Link to="/counter">카운터</Link>
      </RouterButton>
      <RouterButton>
        <Link to="/input">input</Link>
      </RouterButton>
      <RouterButton>
        <Link to="/counter">카운터</Link>
      </RouterButton>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 100%;
  > :not(:first-child) {
    margin-left: 1rem;
  }
`;

const RouterButton = styled.div`
  width: 50px;
  border: 1px solid;
  background-color: gray;
  color: #286bfa;
  cursor: pointer;
`;
