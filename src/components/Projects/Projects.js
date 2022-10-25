import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import OneForAll from "../../Assets/Projects/OneForAll.png";
import UpHills from "../../Assets/Projects/UpHills.png";
import Stocking from "../../Assets/Projects/Stocking.png";
import Footer from "../Footer";


function Projects() {
  return (
    <div>
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few that I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OneForAll}
              title="OneForAll"
              description="E-commerce website where people get to buy and sell products through a points-based billing system."
              ghLink="https://github.com/BaraaJadaan/OneForAll"
              demoLink="https://youtu.be/PU6Gmy2KrZI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UpHills}
              title="UpHills"
              description="Modern landing page for a bikes leasing company done using pure CSS"
              ghLink="https://github.com/BaraaJadaan/UpHills"
              demoLink="https://baraajadaan.github.io/UpHills/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Stocking}
              title="Stocking"
              description="Search for a stock and display its historical price changes and the latest finance news"
              ghLink="https://github.com/BaraaJadaan/Stocking"
              demoLink="https://baraajadaan.github.io/Stocking/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
      <Footer/>
    </div>
  );
}

export default Projects;
