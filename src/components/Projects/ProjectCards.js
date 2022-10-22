import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ translate:'0 -50px' }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center", translate:'0 -50px' }}>
          {props.description}
        </Card.Text>
        <Button style={{ translate:'0 -50px' }} variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px", translate:'0 -50px' }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
