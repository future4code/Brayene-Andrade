import React from "react";
import { InputsContainer,SignUpFormContainer} from "./styled";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm";
import { Button } from "@material-ui/core";

const CadastroForm= () => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({ name: "", email: "", password: "" });
  
  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form)
  };

  return (
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
        <TextField
            name={"name"}
            value={form.name}
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
