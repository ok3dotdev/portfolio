import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Services() {
  return (
    <section className="services">
      <h1
        style={{
          textAlign: "center",
          marginTop: "60px",
          marginBottom: "100px",
        }}
      >
        Services
      </h1>
      <div className="service_boxes">
        <div className="service">
          <h3 style={{ paddingBottom: "35px" }}>Website Development</h3>
          <p style={{ paddingBottom: "20px" }}>
            Working closely with clients to provide eCommerce solutions to meet
            specific business goals, at the same time giving customers a pleasnt
            shopping experience browsing your online store.
          </p>
          <div className="learnmore">
            <h3>
              Learn More{" "}
              <span>
                <BsArrowRight
                  style={{ lineHeight: "12px", fontSize: "20px" }}
                />
              </span>{" "}
            </h3>
          </div>
        </div>
        <div className="service">
          <h3 style={{ paddingBottom: "35px" }}>Website Development</h3>
          <p style={{ paddingBottom: "20px" }}>
            Working closely with clients to provide eCommerce solutions to meet
            specific business goals, at the same time giving customers a pleasnt
            shopping experience browsing your online store.
          </p>
          <div className="learnmore">
            <h3>
              Learn More{" "}
              <span>
                <BsArrowRight
                  style={{ lineHeight: "12px", fontSize: "20px" }}
                />
              </span>{" "}
            </h3>
          </div>
        </div>
        <div className="service">
          <h3 style={{ paddingBottom: "35px" }}>Website Development</h3>
          <p style={{ paddingBottom: "20px" }}>
            Working closely with clients to provide eCommerce solutions to meet
            specific business goals, at the same time giving customers a pleasnt
            shopping experience browsing your online store.
          </p>
          <div className="learnmore">
            <h3>
              Learn More{" "}
              <span>
                <BsArrowRight
                  style={{ lineHeight: "12px", fontSize: "20px" }}
                />
              </span>{" "}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
