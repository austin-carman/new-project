import { Card, Button, Form, Row, Col, FloatingLabel, InputGroup } from 'react-bootstrap';

const Search = () => {
  return (
    <div>
      <Card border="light">
        <Card.Body>
          <Card.Title>Find places to stay on Airbnb</Card.Title>
          <Card.Text>Discover entire homes and private rooms perfect for any trip.</Card.Text>
          <Form>
            <Form.Group>
              <FloatingLabel controlId="floatingTextarea" label="Location" className="mb-3">
                <Form.Control type="text" placeholder="Anywhere" />
              </FloatingLabel>
            </Form.Group>

            <Row>
              <InputGroup>
                <Form.Group as={Col}>
                  <FloatingLabel controlId="floatingTextarea" label="Check in" className="mb-3">
                    <Form.Control type="date" />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col}>
                  <FloatingLabel controlId="floatingTextarea" label="Check out" className="mb-3">
                    <Form.Control type="date" />
                  </FloatingLabel>
                </Form.Group>
              </InputGroup>
            </Row>

            <Row className="mb-3">
              <InputGroup>
                <Form.Group as={Col}>
                  <Form.Select id="dropdown-basic-button" defaultValue="2">
                    <option href="#/action-1">1</option>
                    <option href="#/action-2">2</option>
                    <option href="#/action-3">3</option>
                    <option href="#/action-3">4</option>
                    <option href="#/action-3">5</option>
                    <option href="#/action-3">6</option>
                    <option href="#/action-3">7</option>
                    <option href="#/action-3">8</option>
                    <option href="#/action-3">9</option>
                    <option href="#/action-3">10</option>
                    <option href="#/action-3">11</option>
                    <option href="#/action-3">12</option>
                    <option href="#/action-3">13</option>
                    <option href="#/action-3">14</option>
                    <option href="#/action-3">15</option>
                    <option href="#/action-3">16</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Select id="dropdown-basic-button" title="Children">
                    <option href="#/action-1">1</option>
                    <option href="#/action-2">2</option>
                    <option href="#/action-3">3</option>
                    <option href="#/action-3">4</option>
                    <option href="#/action-3">5</option>
                    <option href="#/action-3">6</option>
                  </Form.Select>
                </Form.Group>
              </InputGroup>
            </Row>

            <div className="d-grid gap-2">
              <Button variant="danger" size="lg">
                Search
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Search;
