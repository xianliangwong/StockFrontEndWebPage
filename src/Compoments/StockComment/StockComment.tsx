import React, { useEffect, useState } from "react";
import StockCommentForm from "./StockCommentForm/StockCommentForm";
import {
  commentGetAPI,
  commentPostAPI,
} from "../../API/Service/CommentService";
import { toast } from "react-toastify";
import { CommentGet } from "../../Model/Comment";
import { get } from "http";
import Spinner from "../Spinner/Spinner";
import StockCommentList from "../StockCommentList/StockCommentList";

type Props = {
  stockSymbol: string;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const StockComment = (props: Props) => {
  const [comments, setComment] = useState<CommentGet[] | null>(null);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    getComments();
  }, []);

  const handleComment = (e: CommentFormInputs) => {
    commentPostAPI(e.title, e.content, props.stockSymbol)
      .then((res) => {
        if (res) {
          toast.success("Comment created succesfully!");
          getComments();
        }
      })
      .catch((e) => {
        toast.warning(e.message);
      });
  };

  const getComments = () => {
    setLoading(true);
    commentGetAPI(props.stockSymbol).then((res) => {
      setLoading(false);
      setComment(res?.data!);
    });
  };
  return (
    <>
      <div className="flex flex-col">
        {loading ? <Spinner /> : <StockCommentList comments={comments!} />}
        <StockCommentForm
          symbol={props.stockSymbol}
          handleComment={handleComment}
        />
      </div>
    </>
  );
};

export default StockComment;
