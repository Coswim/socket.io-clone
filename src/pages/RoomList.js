import React, { useEffect } from "react";
import { io } from "socket.io-client";
import styled from "styled-components";
import { Layout } from "../components";
const RoomList = () => {
  const socket = io();
  useEffect(() => {
    console.log("useEffect 실행");
    socket.emit("requireList");
    socket.on("nameList", (nameList) => {
      console.log(nameList);
    });
  }, []);
  return <Layout></Layout>;
};

export default RoomList;
