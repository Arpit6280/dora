import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import enabledFilter from "./filterFunctions/enabledFilter";
import sequence from "./filterFunctions/sequenceFilter";

function Timeline({ timelines }) {
  timelines = enabledFilter(timelines);
  timelines = sequence(timelines);
  let arr;
  let dateArray = [];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let education = timelines.filter(
    (timeline) => timeline.forEducation === true
  );
  let experience = timelines.filter(
    (timeline) => timeline.forEducation === false
  );

  console.log(education, experience);

  timelines.map((timeline) => {
    arr = timeline.startDate.split("-");
    let arr2 = timeline.endDate.split("-");
    let start = `${months[arr[1] - 1]}, ${arr[0]}`;
    let end = "Present";
    if (arr2.length !== 0) end = `${months[arr2[1] - 1]}, ${arr2[0]}`;
    dateArray.push({
      start: start,
      end: end,
    });
  });

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        backgroundColor: "#fafaf7",
      }}
    >
      <VerticalTimeline>
        {timelines.map((timeline, i) => (
          <>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#f3f4f6",
                border: "1px solid rgba(0,0,0,0.3)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                color: "#000",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #fd6e0a",
              }}
              date={`${dateArray[i].start} - ${dateArray[i].end}`}
              iconStyle={{ background: "#fd6e0a", color: "#fff" }}
              icon={timeline.forEducation ? <MdSchool /> : <MdWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {timeline.company_name}
              </h3>
              <div style={{ marginBottom: "1rem" }}>
                <h4 className="vertical-timeline-element-subtitle">
                  {timeline.jobTitle}{" "}
                </h4>
                <p
                  className="vertical-timeline-element-subtitle"
                  style={{ marginTop: "-5px" }}
                >
                  {timeline.jobLocation}{" "}
                </p>
              </div>
              <ul style={{ color: "black" }}>
                {timeline.bulletPoints.map((points) => (
                  <li style={{ listStyle: "initial" }}>{points}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
