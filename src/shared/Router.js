import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, RoomList } from "../pages";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/room-list" element={<RoomList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
