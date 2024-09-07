import axios from "axios";
import { handleError } from "../../Helper/ErrorHandle";
import { UserProfileToken } from "../../Model/User";

const api = "http://localhost:7096/api/";

export const loginAPI = async (userName: string, passWord: string) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "account/login", {
      username: userName,
      password: passWord,
    });

    console.log(data);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (
  email: string,
  userName: string,
  passWord: string
) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "account/register", {
      email: email,
      username: userName,
      password: passWord,
    });

    return data;
  } catch (error) {
    handleError(error);
  }
};
