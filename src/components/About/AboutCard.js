import React from "react";
import Card from "react-bootstrap/Card";



function AboutCard() {
  return (
    <>
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am a junior <span className="purple">frontend developer </span>
            from <span className="purple"> Damascus, Syria.</span>
            <br />I'm intrested in the latest and hottest technologies.
            <br />Apart from coding, I play Retro Games like<span className="purple"> Kaizo Mario </span>in my free time
          </p>
        </blockquote>
      </Card.Body>
    </Card>
      <div>
        
      </div>
    </>
  );
}

export default AboutCard;
