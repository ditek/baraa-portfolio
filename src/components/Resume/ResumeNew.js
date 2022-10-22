import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Baraa Jadaan's Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
        <Row style={{ justifyContent: "center", alignItems: "center", margin:'60px 0' }}>
          <Col
            md={6}
            style={{
              position: "relative"
            }}
          >
            <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
          </Col>
          <Col
            md={6}
            
          >
            <img style={{ width:'300px' }} src="https://i.ibb.co/yXf8K0v/Baraa-Jadaan-s-Resume-n.jpg" alt="Baraa-Jadaan-s-Resume-n" border="0"></img>
          </Col>
        </Row>
      </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
