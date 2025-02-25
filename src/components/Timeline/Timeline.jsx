import React from "react";
import "./timeline.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineElements from "./timelineElements";

const Timeline = () => (
  <div>
    <h1 className="work-experience-header">Work Experience</h1>
    <VerticalTimeline lineColor="#a3aed0">
      {timelineElements.map((element) => (
        <VerticalTimelineElement
          key={element.id}
          className="vertical-timeline-element--work"
          date={element.date}
          dateClassName="timeline-date"
          contentStyle={{
            background: "#1e293b",
            color: "#fff",
            boxShadow:
              "0em .25em .5em rgba(000,.25),0 .4em1.25em rgba(000,.15)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
          icon={
            element.image ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "41px",
                  height: "41px",
                  marginTop: "10px",
                  marginLeft: "10px",
                  objectFit: "cover",
                  backgroundImage: `url(${element.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ) : null
          }
        >
          <h3 className="vertical-timeline-element-title">{element.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {element.location}
          </h4>
          <p className="timeline-description">{element.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </div>
);

export default Timeline;
