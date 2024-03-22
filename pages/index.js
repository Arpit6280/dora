import Blog from "@/src/components/Blog";
import Contact from "@/src/components/Contact";
import Copyright from "@/src/components/Copyright";
import Experience from "@/src/components/Experience";
import Feedback from "@/src/components/Feedback";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import BlogPopup from "@/src/components/popup/BlogPopup";
import ImageView from "@/src/components/popup/ImageView";
import PortfolioPopup from "@/src/components/popup/PortfolioPopup";
import VideoPopup from "@/src/components/popup/VideoPopup";
import Service from "@/src/components/Service";
import Support from "@/src/components/Support";
import Timeline from "@/src/components/Timeline";
import Works from "@/src/components/Works";
import { DoraContext } from "@/src/Context";
import Cursor from "@/src/layout/Cursor";
import PreLoader from "@/src/layout/PreLoader";
import { dora } from "@/src/utils";
import axios from "axios";
import { Fragment, useContext, useEffect, useState } from "react";

//

const Index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    dora.imgToSvg();
    dora.customMouse();
    dora.smoothScrolling();
    dora.stickyNav();
    dora.activeSkillProgressBar();
    const a = document.querySelectorAll("a");
    for (let i = 0; i < a.length; i++) {
      const element = a[i];
      if (element.getAttribute("href") === "#") {
        element.addEventListener("click", (e) => e.preventDefault());
      }
    }
    console.log("hi");
    axios
      .get(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      )
      .then((res) => {
        console.log(res);
        setData(res.data.user);
      })
      .catch((err) => {
        console.log(err);
        alert("Something wrong try again");
      });
  }, []);
  const { blog, portfolio_modal } = useContext(DoraContext);
  return (
    <Fragment>
      {blog && <BlogPopup />}
      {portfolio_modal && <PortfolioPopup />}
      <ImageView />
      <VideoPopup />
      <PreLoader />
      {/* Preloader End */}
      {/* Header start */}
      <Header />
      {/* Header End */}

      {/* Home Section Start */}
      {data.about !== undefined ? <Hero about={data.about} /> : ""}

      {/* Home Section End */}

      {/* Support Section Start */}
      {data.about !== undefined ? <Support about={data.about} /> : ""}
      {/* Support Section End */}

      {data.timeline !== undefined ? (
        <Timeline timelines={data.timeline} />
      ) : (
        ""
      )}

      {/* Service Section Start */}
      {data.services !== undefined ? <Service services={data.services} /> : ""}
      {/* Service Section End */}

      {/* Experience Section Start */}
      {data.skills !== undefined ? <Experience skills={data.skills} /> : ""}

      {/* Experience Section End */}
      {/* Works Section Start */}
      {data.projects !== undefined ? <Works projects={data.projects} /> : ""}

      {/* Works Section End */}
      {/* Feedback Section Start */}
      {data.testimonials !== undefined ? (
        <Feedback testimonials={data.testimonials} />
      ) : (
        ""
      )}
      {/* Feedback Section End */}

      {/* Blog Section Start */}
      <Blog />
      {/* Blog Section End */}

      {/* Contact Section Start */}
      {data.social_handles !== undefined ? (
        <Contact socialHandles={data.social_handles} />
      ) : (
        ""
      )}
      {/* Contact Section End */}

      {/* Copyright */}
      <Copyright />

      {/* Cursor */}
      <Cursor />
    </Fragment>
  );
};
export default Index;
