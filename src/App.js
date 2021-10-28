import React, { useState} from "react";

import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/PortfolioContainer"
import shared_Data from "./data/common_data.json";
import resume_Data from "./data/resume.json"

function App(){

     const [resumeData, setResumeData] = useState(resume_Data);
     const [sharedData, setSharedData] = useState(shared_Data);

    return (
      <div>
        <Header sharedData={sharedData.basic_info} />
       <Container sharedData={sharedData} setSharedData ={setSharedData} resumeData={resumeData} setResumeData={setResumeData}/>
        <Footer sharedBasicInfo={sharedData.basic_info} />
      </div>
    );
}

export default App;
