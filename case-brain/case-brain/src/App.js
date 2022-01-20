import React from "react";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import { GeneralContainer } from "./components/Menu/styles";

const App = () => {
  return (
    <GeneralContainer>
      <Menu />
      <Footer />
    </GeneralContainer>
  );
};

export default App;
