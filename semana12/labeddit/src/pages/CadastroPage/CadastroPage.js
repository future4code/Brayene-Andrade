import React from "react";
import { ScreenContainer, LogoImage } from "./styled";
import logo from "../../assets/logo.jpg";
import CadastroForm from "./CadastroForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const CadastroPage = ({setRightButtonText}) => {
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <CadastroForm setRightButtonText={setRightButtonText} />
    </ScreenContainer>
  );
};

export default CadastroPage;
