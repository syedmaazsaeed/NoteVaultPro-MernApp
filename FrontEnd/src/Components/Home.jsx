import React from "react";
import Notes from "./Notes";
const Home = (props) => {
  // use Array Destructing
  const { showAlert } = props;
  return (
    <div>
      <Notes showAlert={showAlert} />
    </div>
  );
};

export default Home;
