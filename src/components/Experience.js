import enabledFilter from "./filterFunctions/enabledFilter";
import sequence from "./filterFunctions/sequenceFilter";

const Experience = ({ skills }) => {
  skills = enabledFilter(skills);
  skills = sequence(skills);
  return (
    <section className="experience-section" id="about">
      <div className="container">
        {/* Experience Title */}
        <div className="section_title wow fadeInUp center">
          <p>Why Choose Me</p>
          <h2>My Experience Area</h2>
        </div>
        <div className="experience-items wow fadeInUp">
          {skills.map((skill, i) =>
            skill.enabled ? (
              <div
                className="experience-item"
                style={{
                  display: "flex",
                  marginBottom: "1rem",
                }}
              >
                <img
                  src={skill.image.url}
                  alt=""
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "0.75rem",
                  }}
                />
                <div style={{ width: "90%" }}>
                  <div className="experience-info">
                    <p>{skill.name} </p>
                    <p>{skill.percentage} %</p>
                  </div>
                  <div
                    className="progress-line"
                    data-percent={`${skill.percentage}%`}
                  >
                    <span />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </section>
  );
};
export default Experience;
