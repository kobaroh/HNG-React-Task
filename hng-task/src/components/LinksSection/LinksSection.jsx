import React from "react";
import { links } from "./LinksData";
import classes from "./LinksSection.module.css";
import slack_logo from "../../assets/slack_logo.png";
import github_logo from "../../assets/github_logo.png";

const LinksSection = () => {
  return (
    <section className={classes.links}>
    {/* links */}
      {links.map((link) => {
        return (
          <div key={link.id} className={classes.link_btn_div}>
          {/* link */}
            <a
              id={link.id_text}
              href={link.link}
              className={classes.link__btn}
              target="_blank"
            >
              {link.link_text}
            </a>


{/* link description */}
            {link.link_desc && (
              <p className={classes.link_desc}>{link.link_desc}</p>
            )}
          </div>
        );
      })}

{/* slack and github logos */}
      <div className={classes.logos}>
        <a href="https://slack.com/">
          <img src={slack_logo} alt="slack logo" />
        </a>
        <a href="https://github.com/kobaroh">
          <img src={github_logo} alt="github logo" />
        </a>
      </div>
    </section>
  );
};

export default LinksSection;