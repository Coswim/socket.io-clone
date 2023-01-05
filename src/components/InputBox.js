import React, { useRef, useState } from "react";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const InputBox = () => {
  //navi
  const navigate = useNavigate();
  //input ref
  const inputRef = useRef();
  //socket connection
  const socket = io.connect("http://localhost:4000", {
    cors: {
      origin: "*",
    },
  });

  // 입장 후 모든 소켓 join 하기
  const inputNameHandler = () => {
    let inputName = inputRef.current.value;
    if (inputName !== "") {
      socket.emit("roomEnter", inputName, navigate);
      inputName = "";
    } else {
      alert("이름을 입력해주세요");
    }
  };

  const [users, setUsers] = useState([]);

  socket.on("userList", (users) => {
    setUsers(users);
  });

  const receiveUserListHandler = () => {};

  return (
    <MainInnerBox>
      <InfoText>당신의 성함을 입력해주세요.</InfoText>
      <Input type="text" ref={inputRef} />
      <NextButton type="button" onClick={() => inputNameHandler()}>
        입장
      </NextButton>
    </MainInnerBox>
  );
};

const MainInnerBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 288px;
  width: 594px;
  border-radius: 20px;
`;

const InfoText = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;

const Input = styled.input`
  border: none;
  height: 73px;
  width: 424px;
  border-radius: 20px;
  text-align: center;
  font-size: 1.5rem;
`;

const NextButton = styled.button`
  border: none;
  width: 200px;
  height: 50px;
  border-radius: 20px;
  background-color: aliceblue;
  cursor: pointer;
`;
export default InputBox;
