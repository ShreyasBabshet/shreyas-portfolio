import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import back from "../../assets/img/back2.png";
import "./Project.css";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { PROFILE_DATA } from "../../data";
import { Info } from "react-bootstrap-icons";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState();
  const { projects } = PROFILE_DATA;

  const onReadMore = (project) => {
    setSelectedProject(project);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            {!selectedProject?.details && (
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Projects</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">Work Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">
                            Personal Projects
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Freelancing</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  onReadMore={() => onReadMore(project)}
                                />
                              );
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="section">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque quam, quod neque provident velit, rem
                            explicabo excepturi id illo molestiae blanditiis,
                            eligendi dicta officiis asperiores delectus quasi
                            inventore debitis quo.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque quam, quod neque provident velit, rem
                            explicabo excepturi id illo molestiae blanditiis,
                            eligendi dicta officiis asperiores delectus quasi
                            inventore debitis quo.
                          </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            )}
            <div>
              {selectedProject?.details && (
                <div className="backContainer">
                  <img className="logo" src={back} alt="" />
                </div>
              )}
              {selectedProject?.details && (
                <ol id="project">
                  {selectedProject?.details.map((info, index) => (
                    <li key={index}>{info}</li>
                  ))}
                </ol>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
