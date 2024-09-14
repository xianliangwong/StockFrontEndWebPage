import axios from "axios";
import { handleError } from "../../Helper/ErrorHandle";
import { CommentGet, CommentPost } from "../../Model/Comment";

const api = "http://localhost:7096/api/comments/";

export const commentPostAPI = async (
  title: string,
  content: string,
  symbol: string
) => {
  try {
    const data = await axios.post<CommentPost>(api + `${symbol}`, {
      title: title,
      content: content,
    });

    return data;
  } catch (error) {
    handleError(error);
  }
};

export const commentGetAPI = async (symbol: string) => {
  try {
    //Query parameter

    //send the jwt token in the header when making api request, requires space between "Bearer" and token
    axios.defaults.headers.common["Authorization"] =
      "Bearer" + " " + localStorage.getItem("token");

    const data = await axios.get<CommentGet[]>(api + `?Symbol=${symbol}`);

    return data;
  } catch (error) {
    handleError(error);
  }
};
