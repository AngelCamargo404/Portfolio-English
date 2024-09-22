import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME TALK A LITTLE BIT <span className="purple">ABOUT ME</span>
            </h1>
            <p className="home-about-body">
            I'm a programming lover, constanly looking for new tools and technologies to learn more and more everything that's important for a FullStack Web Developer.
              <br />
              <br />Languages I'm Confortable with:
              <i>
                <b className="purple"> JavaScript, PHP, SQL. </b>
              </i>
              <br />
              <br />
              My field of Interest is creating new &nbsp;
              <i>
                <b className="purple">Web Applications, learning new technologies </b> and also in areas related to {" "}
                <b className="purple">
                  languages and soccer.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing web apps with <b className="purple">Node.js, React.js</b>
              <i>
                <b className="purple">
                  {" "}
                  Modern JavaScript,
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"> MySQL, PHP and Laravel</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact me</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AngelCamargo404"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/angel-camargo-942127241/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.link/wm3erq"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
