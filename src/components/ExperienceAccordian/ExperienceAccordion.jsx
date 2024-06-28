import React from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard.jsx";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import { darkTheme } from "../constants.js";
import { experience } from "../../data.js";

function ExperienceAccordion(props) {
  const theme = darkTheme;
  console.log(props);
  return (
    <div className="experience-accord">
      <ThemeProvider theme={DarkTheme}>
        {props.sections[0]["experiences"]?.map((experience, index) => {
          return (
            <ExperienceCard key={index} experience={experience} theme={theme} />
          );
        })}
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
