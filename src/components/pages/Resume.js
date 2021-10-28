import React, { useState} from "react";
import Experience from "../Experience";
import Skills from "../Skills";

function Resume(props){

    return (
      <div>
        <Experience
          resumeExperience={props.resumeExperience}
          resumeBasicInfo={props.resumeBasicInfo}
        />
        <Skills
          sharedSkills={props.sharedSkills}
          resumeBasicInfo={props.resumeBasicInfo}
        />
      </div>
    );
}

export default Resume;
