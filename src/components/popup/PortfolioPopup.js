import { DoraContext } from "@/src/Context";
import { useContext } from "react";
import { CiStreamOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Modal from "./Modal";
const PortfolioPopup = () => {
  const { portfolio_modal_show } = useContext(DoraContext);
  const { portfolio_works } = useContext(DoraContext);
  console.log(portfolio_works);
  return (
    <Modal close={portfolio_modal_show}>
      <div className="content">
        <div className="img">
          <img src={portfolio_works.image.url} alt={portfolio_works.title} />
        </div>
        <div className="des">
          <span>Details</span>
          <h4>{portfolio_works.title}</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <button
              style={{
                border: "0",
              }}
            >
              <a
                href={portfolio_works.liveurl}
                target="_blank"
                style={{
                  display: "flex",
                  border: "1px solid red",
                  padding: "3px",
                  borderRadius: "3px",
                }}
              >
                <p style={{ color: "red", marginTop: "0px", fontSize: "13px" }}>
                  Live
                </p>{" "}
                <CiStreamOn style={{ color: "red", height: "16px" }} />
              </a>
            </button>
            <a href={portfolio_works.githuburl} target="_blank">
              <FaGithub />
            </a>
          </div>
          <div>
            <span>TechStack Used- </span>
            {portfolio_works.techStack.map((tech, i) => (
              <button
                style={{
                  borderRadius: "4px",
                  border: "1.5px solid gray",
                  padding: "4px 7px",
                  marginRight: "0.75rem",
                  boxShadow: "3px 2px 8px #888888",
                }}
              >
                {tech}{" "}
              </button>
            ))}
          </div>
          <p>{portfolio_works.description}</p>
        </div>
      </div>
    </Modal>
  );
};
export default PortfolioPopup;
