import React from "react";
import cl from "./offline.module.scss";
import {CiCloudOff} from "react-icons/ci";

function OfflinePage({children}) {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={cl.wrapper}>
      <div className={cl.info}>
        <CiCloudOff className={cl.icon} />
        <h2 className={cl.title}>OOPS!</h2>
        <p className={cl.subtitle}>
          {children}
        </p>
        {/* <button
          onClick={handleReload}
          className={`${cl.custom_btn} ${cl.btn_9}`}>
          Try again
        </button> */}
      </div>
    </div>
  );
}

export default OfflinePage;
