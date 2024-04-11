import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_PLOBALAPPS from "../../assets/img/experience/plobal apps.svg";
import L_ATTAINU from "../../assets/img/experience/attainu_logo.jpg";
import L_TSI from "../../assets/img/experience/TSI.jpg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div>
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      {/* Plobal Apps */}
      <Jumbotron className="jumbo-style">
        <Tilt options={{ max: 5, scale: 1 }}>
          <Card>
            <Card.Header
              as="h5"
              className="d-flex justify-content-center flex-wrap"
            >
              <Card.Img
                variant="top"
                className="img-resize"
                src={L_PLOBALAPPS}
                alt="Plobal apps logo"
              />
            </Card.Header>
            <Card.Body className="d-flex justify-content-center flex-column">
              <div>
                <Card.Title className="text-center">
                  Senior Developer Engineer
                </Card.Title>
              </div>
              <div>
                <div className="text-center style">
                  <strong className="body-title-style ">
                    Frontend Developer
                  </strong>
                  <br />
                  <strong>Technology:</strong> React JS, HTML, CSS, TypeScript,
                  JavaScript, Angular
                  <br />
                  <strong>Duration:</strong> April 2021 - Present
                  <br />
                  <strong> Description </strong>
                  <ul className="text-left">
                    <li>
                      <strong>Developed & improved</strong>. various features
                      across multiple projects including the{" "}
                      <strong>
                        Dashboard, PA-Website, and Havaians(Client),
                      </strong>{" "}
                      focusing on both functionality and design enhancements.
                    </li>
                    <li>
                      <strong>Developed</strong> the Preview Page and App
                      Language Page, improving user accessibility and
                      interaction. <strong>Implemented</strong>
                      multilingual Navigation and font changes, catering to
                      diverse user preferences and enhancing usability.
                    </li>
                    <li>
                      <strong>Integrated and customized</strong> Live Stream API
                      for real-time updates, enriching the user experience with
                      dynamic content. <strong>Incorporated</strong> Freshchat
                      and Freshdesk links, seamlessly integrating customer
                      support for enhanced user assistance;
                    </li>
                    <li>
                      <strong>Redesigned</strong> the Login Page and Cart,
                      enhancing functionality and user interaction for smoother
                      transactions.Ensured a seamless browsing experience by
                      addressing and resolving design bugs in the Product Detail
                      Page (PDP).
                    </li>
                    <li>
                      <strong>Created and regularly updated</strong> the FAQ
                      section, effectively addressing common user queries and
                      providing valuable assistance.
                    </li>
                    <li>
                      <strong>PA-Website and Havaians(Client):</strong> Led
                      significant <strong>design and functionality</strong>{" "}
                      changes, enhancing user experience and interface.
                    </li>
                    <li>
                      <strong>Created</strong> Low-Level Design (LLD) and Class
                      Diagrams for new features.
                    </li>
                    <li>
                      <strong>Managed</strong> server data communication using
                      RESTful APIs and fetching information via Redux and
                      Context API’s.
                    </li>
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Tilt>
      </Jumbotron>

      {/* AttainU */}
      <Jumbotron className="jumbo-style">
        <Tilt options={{ max: 5, scale: 1 }}>
          <Card>
            <Card.Header
              as="h5"
              className="d-flex justify-content-center flex-wrap"
            >
              <Card.Img
                variant="top"
                className="img-resize"
                src={L_ATTAINU}
                alt="AttainU logo"
              />
            </Card.Header>
            <Card.Body className="d-flex justify-content-center flex-column">
              <div>
                <Card.Title className="text-center">MERN Engineer</Card.Title>
              </div>
              <div>
                <div className="text-center style">
                  <strong className="body-title-style ">
                    Full Stack Developer
                  </strong>
                  <br />
                  <strong>Technology:</strong> React JS, HTML, CSS, BootStrap,
                  JavaScript, Python
                  <br />
                  <strong>Duration:</strong> May 2020 - April 2021
                  <br />
                  <strong> Description </strong>
                  <ul className="text-left">
                    <li>
                      <strong>Educated</strong> students on web development
                      basics, <strong>guiding</strong> them through projects
                      with constructive feedback.
                    </li>
                    <li>
                      <strong>Build</strong> front-end components of web
                      applications, demonstrating best practices and industry
                      standards.
                    </li>
                    <li>
                      <strong>Enhanced</strong> the curriculum to align with
                      current industry trends, ensuring comprehensive full-stack
                      development learning.
                    </li>
                    <li>
                      <strong>Guided</strong> students through the full-stack
                      web development program, offering{" "}
                      <strong>mentorship and support</strong> at every stage of
                      their learning journey.
                    </li>
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Tilt>
      </Jumbotron>

      {/* TSI(Mphasis) */}
      <Jumbotron className="jumbo-style">
        <Tilt options={{ max: 5, scale: 1 }}>
          <Card>
            <Card.Header
              as="h5"
              className="d-flex justify-content-center flex-wrap"
            >
              <Card.Img
                variant="top"
                className="img-resize"
                src={L_TSI}
                alt="TSI logo"
              />
            </Card.Header>
            <Card.Body className="d-flex justify-content-center flex-column">
              <div>
                <Card.Title className="text-center">
                  Support Engineer
                </Card.Title>
              </div>
              <div>
                <div className="text-center style">
                  <strong className="body-title-style ">L1 Executive</strong>
                  <br />
                  <strong>Technology:</strong> MS-Office, Networking tools
                  <br />
                  <strong>Duration:</strong> July 2017 - March 2020
                  <br />
                  <strong> Description </strong>
                  <ul className="text-left">
                    <li>
                      <strong>Provided</strong> first-level technical support
                      for ATM users, troubleshooting hardware/software issues,
                      and coordinating repairs.
                    </li>
                    <li>
                      <strong>Ensured</strong> optimal ATM performance through
                      routine checks, maintenance, and clear user guidance;.
                    </li>
                    <li>
                      <strong>Assisted</strong> Assisted in the installation and
                      configuration of new ATMs, contributing to the expansion
                      and improvement of ATM services.
                    </li>
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Tilt>
      </Jumbotron>
    </div>
  );
};

export default Experience;
