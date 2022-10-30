import React from "react";
import classes from "./App.module.css"
import FooterSection from "./components/FooterSection/FooterSectiom";
import LinksSection from "./components/LinksSection/LinkSection";
import ProfileSection from "./components/ProfileSection/ProfileSection";

const App = () => {
  return (
    <main className={classes.app_container}>
      <ProfileSection />
      <LinksSection />
      <FooterSection />
    </main>
  );
};

export default App;