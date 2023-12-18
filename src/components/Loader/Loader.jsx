import React from "react";
import cl from "./loader.module.scss";
import {MutatingDots} from "react-loader-spinner";

function Loader() {
  const [status, setStatus] = React.useState("Getting the weather");
  React.useEffect(() => {
    document.body.className = localStorage.getItem("theme") || "light";
  }, []);
  const displayStatus = () => {
    const status = [
      "Getting the weather...",
      "Taking the temperature...",
      "Measuring the wind speed...",
      "Entering data...",
    ];
    let count = 0;
    const interval = setInterval(() => {
      if (count === status.length - 1) {
        count = 0;
      } else {
        count++
      }
      setStatus(status[count]);
    }, 2500);
    return () => clearInterval(interval);
  };
  React.useEffect(() => {
    const displayStat = displayStatus(status);
    return displayStat;
  }, []);
  return (
    <div className={cl.loader}>
      <div className={cl.loader__inner}>
        <MutatingDots
          height="100"
          width="100"
          color="var(--elem-color)"
          secondaryColor="var(--elem-color)"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <p className={cl.text}>{status}</p>
      </div>
    </div>
  );
}

export default Loader;
