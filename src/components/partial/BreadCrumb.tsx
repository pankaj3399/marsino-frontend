import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { BREADCRUMB_INTERFACE } from "../../interfaces";
import { useNavigate } from "react-router-dom";

type Props = {
  items: BREADCRUMB_INTERFACE[];
};

const BreadCrumb = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2 items-center mt-2 fw-400">
      {props.items.map((item, index) => (
        <div
          key={index}
          className={` flex items-center gap-2 ${
            index === props.items.length - 1
              ? "text-gray-400 cursor-normal"
              : "text-primary cursor-pointer"
          }`}
          onClick={() => {
            if (item.path && index !== props.items.length - 1) {
              navigate(item.path);
            }
          }}
        >
          {item.label}
          {index !== props.items.length - 1 && (
            <AiFillCaretRight className="text-gray-400" />
          )}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
