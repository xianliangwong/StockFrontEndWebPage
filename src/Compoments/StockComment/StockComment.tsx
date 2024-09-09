import React from "react";
import StockCommentForm from "./StockCommentForm/StockCommentForm";
import { commentPostAPI } from "../../API/Service/CommentService";
import { toast } from "react-toastify";

type Props = {
  stockSymbol: string;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const StockComment = (props: Props) => {
  const handleComment = (e: CommentFormInputs) => {
    commentPostAPI(e.title, e.content, props.stockSymbol)
      .then((res) => {
        if (res) {
          toast.success("Comment created succesfully!");
        }
      })
      .catch((e) => {
        toast.warning(e.message);
      });
  };
  return (
    <>
      <StockCommentForm
        symbol={props.stockSymbol}
        handleComment={handleComment}
      />
    </>
  );
};

export default StockComment;
