import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Favourites = () => {
  return (
    <Container>
      <Row>
        <Col className="my-3 d-flex justify-content-between align-items-center">
          <h1 className="display-4">Favourites companies:</h1>
          <Link to="/" className="btn btn-outline-dark">
            Home
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="my-1"></Col>
      </Row>
    </Container>
  )
}

export default Favourites
