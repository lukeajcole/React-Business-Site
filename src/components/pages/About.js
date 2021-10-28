import React from "react";
import { Icon } from "@iconify/react";
import mongoIcon from "@iconify/icons-logos/mongodb";
import reactIcon from "@iconify/icons-logos/react";
import nodeIcon from "@iconify/icons-logos/nodejs";
import mernIcon from "@iconify/icons-logos/mern";
import sequelizeIcon from "@iconify/icons-logos/sequelize";

const About = (props) =>{
    if (props.sharedBasicInfo) {
      var profilepic = "images/" + props.sharedBasicInfo.image;
    }
    if (props.resumeBasicInfo) {
      var sectionName = props.resumeBasicInfo.section_name.about;
      var hello = props.resumeBasicInfo.description_header;
      var about = props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid mx-auto d-block">
                <span style={{ cursor: "auto" }}>
                  <img className="mx-auto d-block rounded"
                    height="auto"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={mongoIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={nodeIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon 
                    icon={sequelizeIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon 
                    icon={mernIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card border-0 p-3">
                  <div
                    className="card-body font-trebuchet text-justify m-3 border-0 shadow-lg rounded p-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave p-3">{hello}...</span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 col-1 mx-auto">
            
          </div>
        </div>
      </section>
    );
  }

export default About;
