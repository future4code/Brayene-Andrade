import React from "react";
import { InputsContainer,} from "./styled";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import { Button } from "@material-ui/core";
import { login } from "../../services/user";
import { useHistory } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";


const LoginForm= () => {
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory()
  
  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, history)
  };

  return (
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
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
            Fazer Login
          </Button>
        </form>
      </InputsContainer>

  );
};

export default LoginForm;
