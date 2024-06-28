import React from "react";

import ExperienceAccordion from "../ExperienceAccordian/ExperienceAccordion.jsx";
import "./Experience.css";
import { darkTheme } from "../constants.js";
import { experience } from "../../data.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg.jsx";

function Experience(props) {
  const theme = darkTheme;

  return (
    <div className="experience-main">
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: darkTheme?.text }}
              >
                {experience.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: darkTheme.text }}
              >
                {experience["subtitle"]}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: darkTheme.secondaryText }}
              >
                {experience["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <ExperienceAccordion sections={experience["sections"]} theme={theme} />
    </div>
  );
}

export default Experience;
