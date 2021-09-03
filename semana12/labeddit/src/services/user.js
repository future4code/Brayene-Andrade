import axios from "axios";
import { BASE_URL } from "../constants/urls";
import {goToFeed} from "../routes/cordinator"

export const login = (body, clear, history, setRightButtonText) => {
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
      setRightButtonText("Logout")
    })
    .catch((err) => alert(err.response.data.message));
};

export const signUP = (body, clear, history, setRightButtonText) => {
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
      setRightButtonText("Logout")
    })
    .catch((err) => alert(err.response.data.message));
};