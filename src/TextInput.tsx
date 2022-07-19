import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TextInput = () => {
  const history = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const mockingPW = "I am Mocking Password";

  const onClickBack = () => {
    history("/");
  };

  const onChangeUserNameInput = () => (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const onChangePasswordInput =
    (pw: string) => (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setPassword(pw + e.target.value);
    };

  useEffect(() => {
    console.log(password);
    console.log(username);
  }, [password, username]);

  const handleCheckBox = () => (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <Wrapper>
      <Header>text input</Header>
      <BackHandler onClick={onClickBack}>뒤로가기 </BackHandler>
      <InputContainer>
        <div>아이디</div>
        <InputBox type="text" onChange={onChangeUserNameInput()} />
        <div>비밀번호</div>
        <InputBox type="text" onChange={onChangePasswordInput(mockingPW)} />
      </InputContainer>
      <CheckBoxContainer>
        <CheckBoxLabel>
          <CheckBox type="checkbox" value="1" onChange={handleCheckBox()} />1
        </CheckBoxLabel>
      </CheckBoxContainer>
    </Wrapper>
  );
};

export default TextInput;

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

const InputContainer = styled.div`
  display: flex;

  width: 80%;

  margin-top: 1rem;
  > :not(:first-child) {
    margin-left: 1rem;
  }
`;

const CheckBoxContainer = styled.div`
  display: flex;
  width: 80%;
  height: 200px;
  margin-top: 3rem;

  border: 1px solid;
`;

const InputBox = styled.input`
  width: 40%;
  height: 30px;
`;

const CheckBox = styled.input``;
const CheckBoxLabel = styled.label`
  font-size: 1rem;
  font-weight: normal;
`;
