import React, { useState, useEffect } from "react";
import { Container, Row, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfEnglish from "../../Assets/CV-Angel-Camargo-English.pdf";
import pdfSpanish from "../../Assets/CV-Angel-Camargo-Spanish.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/AngelCamargo404/Portfolio-English/main/src/Assets/CV-Angel-Camargo-English.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const handleCloseModal = () => setShowLanguageModal(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            onClick={(ev) => {ev.preventDefault(); setShowLanguageModal(true)}}
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>

          <Modal show={showLanguageModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Select Language</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Button target="_blank" href={pdfEnglish} variant="primary">
                English
              </Button>
              &nbsp;
              <Button target="_blank" href={pdfSpanish} variant="primary">
                Spanish
              </Button>
            </Modal.Body>
          </Modal>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
