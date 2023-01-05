import React, { useEffect } from "react";
import { io } from "socket.io-client";
import styled from "styled-components";
import { Layout } from "../components";
const RoomList = () => {
  const socket = io();
  useEffect(() => {
    socket.emit("requireList");
  }, []);
  return <Layout></Layout>;
};

export default RoomList;
