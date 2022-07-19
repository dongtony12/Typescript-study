import { KeyboardEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const history = useNavigate();

  const onClickMinus = () => {
    setCount(count - 1);
  };

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onClickPlusSubscribeFunc = () => (e: MouseEvent) => {
    setCount(count + 1);
  };

  const onClickMinusSubscribeFunc = () => (e: MouseEvent) => {
    setCount(count - 1);
  };

  const onPressEnterKey = () => (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      onClickPlus();
    }
  };

  const onClickBack = () => {
    history("/");
  };

  return (
    <Wrapper>
      <Header>카운터</Header>
      <BackHandler onClick={onClickBack}>뒤로가기</BackHandler>
      <CounterBox>{count}</CounterBox>
      <ButtonContainer>
        <Button onClick={onClickMinus}>-1</Button>
        <Button onClick={onClickPlus} onKeyPress={onPressEnterKey}>
          +1
        </Button>
        <input type="text" onKeyPress={onPressEnterKey()} />
      </ButtonContainer>
    </Wrapper>
  );
};

export default Counter;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;

  font-size: 2rem;
  margin-top: 1rem;
`;

const BackHandler = styled.div`
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 1rem;

  width: 10rem;
`;

const CounterBox = styled.div`
  padding: 2rem;
  margin-top: 1rem;
  font-size: 3rem;
`;

const Button = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  border: 1px solid;
  border-radius: 2px;

  background-color: #286bfa;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
`;
