import {Container, Row, Col} from "react-bootstrap";
import workInProgress from "../assets/img/workInProgress.png"
export const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>Work in progress</p>
            <img src={workInProgress}/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}