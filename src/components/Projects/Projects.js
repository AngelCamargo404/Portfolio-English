import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import simonSays from "../../Assets/Projects/SimonSaysChallenge.png";
import drumKit from "../../Assets/Projects/DrumKitChallenge.png";
import keeperApp from "../../Assets/Projects/KepperApp-React.png";
import glitter from "../../Assets/Projects/glitter.png";
import proyectoBlogCafe from "../../Assets/Projects/ProyectoBlogCafe.png";
import alfaco from "../../Assets/Projects/Alfaco-App.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some <strong className="purple">projects </strong> I've made
        </h1>
        <p style={{ color: "white" }}>
          Here we have some projects made for me
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={glitter}
              isBlog={false}
              title="Glitter"
              description="Ecommerce project, shopping cart for personal purposes, made with react.js and node.js."
              ghLink="https://github.com/AngelCamargo404/Glitter"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alfaco}
              isBlog={false}
              title="Alfaco App"
              description="App in production, administrative project made for a Peruvian company called Alfa Co SAC."
              demoLink="https://mesadepartes.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeperApp}
              isBlog={false}
              title="Keeper App"
              description="Project made to learn and understand react.js functionality, To Do List."
              ghLink="https://github.com/AngelCamargo404/Keeper-React-App"
              demoLink="https://keeper-app-acamargo.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simonSays}
              isBlog={false}
              title="Simon Says Game"
              description="Interesting game where the user has to remember the sequence of colors, it gets hard depending on the level."
              ghLink="https://github.com/AngelCamargo404/Simon-Says-Game"
              demoLink="https://simon-says-acamargo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proyectoBlogCafe}
              isBlog={false}
              title="Coffee Blog"
              description="Project to experience new technologies as SASS and GULP.js"
              ghLink="https://github.com/AngelCamargo404/Blog-Cafe-Solo-Front"
              demoLink="https://blog-de-cafe-solo-front.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drumKit}
              isBlog={false}
              title="DRUM KIT"
              description="To learn how to play some instruments in web"
              ghLink="https://github.com/AngelCamargo404/Drum-Kit-GAME"
              demoLink="https://drum-kit-acamargo.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
