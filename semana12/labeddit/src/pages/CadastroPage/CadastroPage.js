import React from "react";
import { ScreenContainer, LogoImage } from "./styled";
import logo from "../../assets/logo.jpg";
import CadastroForm from "./CadastroForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const CadastroPage = () => {
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <CadastroForm />
    </ScreenContainer>
  );
};

export default CadastroPage;
