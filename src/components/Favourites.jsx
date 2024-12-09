import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Favourites = () => {
  const favArray = useSelector((reduxState) => {
    return reduxState.favourites.content
  })

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
        <Col className="my-1">
          {favArray.map((data) => (
            <Row
              key={data._id}
              className="mx-0 mt-3 p-3 align-items-center"
              style={{ border: '1px solid #00000033', borderRadius: 4 }}
            >
              <Col xs={3}>
                <Link to={`/${data.company_name}`}>{data.company_name}</Link>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites
