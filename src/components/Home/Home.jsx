import React from "react";
import cl from "./home.module.scss";
import {MyContext} from "../../myContext";
import SearchInput from "../searchInput/SearchInput";
import Message from "../message/Message";

function Home() {
  return (
    <div className={cl.home}>
      <SearchInput />
      <div className={cl.guide}>Chtoto</div>
    </div>
  );
}

export default Home;
