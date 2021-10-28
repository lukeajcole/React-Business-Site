import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

const Experience = (props) => {
    if (props.resumeExperience && props.resumeBasicInfo) {
      var sectionName = props.resumeBasicInfo.section_name.experience;
      var experience = props.resumeExperience.map(function (experience, i) {
        const technologies = experience.technologies;
        const experienceType = experience.experienceType  == 'work' ? 'fa-briefcase' : 'fa-graduation-cap' ;
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--experience"
            date={experience.years}
            dateClassName={'timelineDate'}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className={"fas experience-icon " + experienceType }></i>}
            key={i}
          >
            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {experience.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {experience.company}
            </h4>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {experience}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }

export default Experience;
