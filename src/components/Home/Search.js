import { Card, Button, Form, Row } from 'react-bootstrap';

const Search = () => {
  return (
    <div>
      <Card border="primary">
        <Card.Body>
          <Card.Title>Find places to stay on Airbnb</Card.Title>
          <Card.Text>Discover entire homes and private rooms perfect for any trip.</Card.Text>
          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder="Location" />
            </Form.Group>
            <Row>
              <Form.Group>
                <Form.Control type="date" placeholder="Check in" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="date" placeholder="Check out" />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group>
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
              <Form.Group>
                <Form.Select id="dropdown-basic-button" title="Children">
                  <option href="#/action-1">1</option>
                  <option href="#/action-2">2</option>
                  <option href="#/action-3">3</option>
                  <option href="#/action-3">4</option>
                  <option href="#/action-3">5</option>
                  <option href="#/action-3">6</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Button variant="primary" size="lg">
              Search
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Search;
