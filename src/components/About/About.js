import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import mp4_file from "../../Assets/Kaizo Success.mp4";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ paddingBottom: "100px" }}>
          <Col
            md={6}
            style={{ paddingTop: "20px" }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Me?</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={6}
          >
            <video controls style={{height:'350px', width:'350px'}}>
             <source src={mp4_file}/>
            </video>
            
          </Col>
          <p style={{ color: "rgb(155 126 172)", padding:'80px'}}>
            “If I were a medical man, I should prescribe a holiday to any patient who considered his work important.”
            <span className="blockquote-footer">Bertrand Russell</span>
          </p>

        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
