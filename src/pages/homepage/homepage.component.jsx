import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

// history will be accessed inside the Homepage only as it's the parent of menu-list and Directory component
const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
