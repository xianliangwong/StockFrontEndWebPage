import axios from "axios";
import { handleError } from "../../Helper/ErrorHandle";
import { CommentPost } from "../../Model/Comment";

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
