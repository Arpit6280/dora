import { Swiper, SwiperSlide } from "swiper/react";
import { doraSlider } from "../sliderProps";
import enabledFilter from "./filterFunctions/enabledFilter";

const Service = ({ services }) => {
  services = enabledFilter(services);

  return (
    <section className="service-section" id="services">
      <div className="container">
        <div className="row align-items-center">
          <div className="service-title-container">
            {/* Service Title */}
            <div className="section_title wow fadeInUp">
              <p>Services</p>
              <h2>I Provide Wide Range Of Digital Services</h2>
            </div>
            {/* Arrow icon */}
            <div className="service-btn-container wow fadeInUp">
              <a href="#" className="slider-arrow service-swiper-button-left">
                <img
                  className="svg"
                  src="images/icons/arrow-left.svg"
                  alt="service left btn"
                />
              </a>
              <a
                href="#"
                className="slider-arrow active service-swiper-button-right"
              >
                <img
                  className="svg"
                  src="images/icons/arrow-right.svg"
                  alt="service left btn"
                />
              </a>
            </div>
          </div>
          <Swiper
            {...doraSlider.serviceSlider}
            className="swiper services-cont wow fadeInUp"
          >
            {" "}
            {services.map((service, i) => (
              <SwiperSlide className="swiper-slide" key={i}>
                <div className="service-item">
                  <span
                    className={`service-item-logo service-item-logo-cont-${
                      (i % 4) + 1
                    }`}
                  >
                    <img
                      src={service.image.url}
                      alt="service"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </span>
                  <h4>{service.name}</h4>
                  <p>{service.desc}</p>
                  {service.charge !== undefined ? (
                    <button
                      className={`price  service-item-logo-cont-${(i % 4) + 1}`}
                    >
                      {service.charge}
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Service;
