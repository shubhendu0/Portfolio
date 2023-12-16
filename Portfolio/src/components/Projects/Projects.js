import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import authentication from "../../Assets/Projects/advanceAuthentication.png";
import restaurant from "../../Assets/Projects/restaurant.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce"
              description="Created a full stack E-Commerce website. Tech Stack Used - 
              HTML, CSS, Javascript, Reactjs, MUI, ReduxToolkit, Nodejs, Expressjs, 
              MongoDB and various other libraries. Implemented Dark Mode, 
              Infinite scrolling, Filters, Sorting, Wishlist and Cart."
              ghLink="https://github.com/shubhendu0/E-Commerce"
              demoLink=" https://fashion-store-mml3.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={authentication}
              isBlog={false}
              title="Advance Authentication"
              description="Created a full stack website which supports advanced 
              authentication and authorization. Tech Stack Used - HTML, CSS, 
              Javascript, Reactjs, SCSS, ReduxToolkit, Nodejs, Expressjs, 
              MongoDB and various other libraries. Implemented Goggle SignIn, 
              Forgot Password and Email Verification."
              ghLink="https://github.com/shubhendu0/Advanced-Authentication-MERN-Frontend"
              demoLink=" https://advanced-authentication-frontend.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Restaurant"
              description="Created a static and responsive website for restaurant.
              Tech Stack Used - HTML, CSS, Javascript, Reactjs, and various other
              libraries."
              ghLink="https://github.com/shubhendu0/Restaurant-Page"
              demoLink="https://restaurant-sg39.onrender.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;