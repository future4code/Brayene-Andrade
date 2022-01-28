import React from "react";
import { InputsContainer,SignUpFormContainer} from "./styled";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm";
import { Button } from "@material-ui/core";
import { signUP } from "../../services/user";

const CadastroForm= ({setRightButtonText}) => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({ username: "", email: "", password: "" });
  
  const onSubmitForm = (event) => {
    event.preventDefault();
   signUP(form, clear, history, setRightButtonText)
  
  };

  return (
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
        <TextField
            name={"username"}
            value={form.username}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            autoFocus
            margin={"dense"}
            required
            
          />
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"dense"}
            required
            type={"password"}
          />
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            margin={"dense"}
            >
            Cadastrar
          </Button>
        </form>
      </InputsContainer>

  );
};

export default CadastroForm;
