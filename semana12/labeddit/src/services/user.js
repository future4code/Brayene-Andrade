import axios from "axios";
import { BASE_URL } from "../constants/urls";
import {goToFeed} from "../routes/cordinator"

export const login = (body, clear, history) => {
  const headers = {
    headers: {
      ContentType: "application/json",
    },
  };
  axios
    .post(`${BASE_URL}/users/login`, body, headers)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear();
      goToFeed(history)
    })
    .catch((err) => alert("Ops, algo de errado não está certo"));
};

export const signUP = (body, clear, history) => {
  const headers = {
    headers: {
      ContentType: "application/json",
    },
  };
  axios
    .post(`${BASE_URL}/users/signup`, body, headers)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      console.log (res.data.token)
      clear();
      goToFeed(history)
    })
    .catch((err) => alert("Ops, algo de errado não está certo"));
};