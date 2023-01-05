import React, { useState } from "react";
import { InputBox, Layout } from "../components";
const Main = () => {
  const [isNext, setIsNext] = useState(false);
  return (
    <Layout>
      <InputBox isNext={isNext} setIsNext={setIsNext} />
    </Layout>
  );
};

export default Main;
