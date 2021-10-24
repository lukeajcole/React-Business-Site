import React, { useState} from "react";

import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import shared_Data from "./data/common_data.json";
import resume_Data from "./data/resume.json"

function App(){

     const [resumeData, setResumeData] = useState(resume_Data);
     const [sharedData, setSharedData] = useState(shared_Data);

  //Functions to load data from a mongoDB
  // loadResume();
  // loadSharedData();

    return (
      <div>
        <Header sharedData={sharedData.basic_info} />
        <About
          resumeBasicInfo={resumeData.basic_info}
          sharedBasicInfo={sharedData.basic_info}
        />
        <Projects
          resumeProjects={resumeData.projects}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Skills
          sharedSkills={sharedData.skills}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Experience
          resumeExperience={resumeData.experience}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Footer sharedBasicInfo={sharedData.basic_info} />
      </div>
    );
}

export default App;
