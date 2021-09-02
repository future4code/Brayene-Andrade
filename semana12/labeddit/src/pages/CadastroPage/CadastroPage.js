import React from "react";
import { ScreenContainer, LogoImage } from "./styled";
import logo from "../../assets/logo.jpg";
import CadastroForm from "./CadastroForm";

const CadastroPage = () => {
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <CadastroForm />
    </ScreenContainer>
  );
};

export default CadastroPage;
