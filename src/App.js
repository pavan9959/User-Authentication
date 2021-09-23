import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";

const App = (props) => {
  const [isloggedin, setisloggedin] = useState(false);

  const handelaut = () => {
    setisloggedin(!isloggedin);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      handelaut();
    }
  }, []);

  return (
    <div>
      <Nav userlogedin={isloggedin} handelaut={handelaut} />
    </div>
  );
};
export default App;
