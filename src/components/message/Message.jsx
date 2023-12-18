import React from "react";
import {CiCircleInfo} from "react-icons/ci";
import {CiSquareInfo} from "react-icons/ci";
import cl from "./message.module.scss";

function Message({error = false,  children = "Your message is here..."}) {
  const style = {
    color: "var(--elem-color)",
    borderColor: "var(--elem-color)",
    text: {
      color: "var(--primary-text-color)",
    },
  };
  const errorStyle = {
    color: "rgb(207, 0, 0)",
    borderColor: "rgb(207, 0, 0)",
    text: {
      color: "rgb(207, 0, 0)",
    },
  };
  return (
    <div className={cl.message_wrap}>
      <div style={error ? errorStyle : style} className={cl.message}>
        <div className={cl.info}>
          {error ? (
            <CiSquareInfo className={` ${cl.iconError}`} />
          ) : (
            <CiCircleInfo className={cl.icon} />
          )}
          <p style={error ? errorStyle.text : style.text} className={cl.text}>
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;
