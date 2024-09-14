import React from "react";
import { CommentGet } from "../../Model/Comment";

type Props = {
  comment: CommentGet;
};

function StockCommentListItem(prop: Props) {
  return (
    <>
      <div className="relative grid grid-cols-1 gap-4 ml-4 p-4 mb-8 w-full border rounded-lg bg-white shadow-lg">
        <div className="relative flex gap-4">
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between">
              <p className=" relative text-xl whitespace-nowrap truncate overflow-hidden">
                {prop.comment.title}
              </p>
            </div>
            <p className="text-dark text-sm">@{prop.comment.createdBy}</p>
          </div>
        </div>
        <p className="-mt-4 text-gray-500">{prop.comment.content}</p>
      </div>
    </>
  );
}

export default StockCommentListItem;
