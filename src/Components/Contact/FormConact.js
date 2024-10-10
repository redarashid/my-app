import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormConact = () => {
  return (
    <div>
        <div className='title'>
          <h5>Contact Us</h5>
          <h1>Feel free to message us</h1>
        </div>

        <div className='form-contact'>
            <Container>
              <Form className='my-5'>
                <Row>
                  <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Email.." />
                  </Form.Group>

                  <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Your Password..." />
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="number" placeholder="Your Phone..." />
                  </Form.Group>

                  <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Enter Your Name..." />
                  </Form.Group>
                </Row>
                  <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" className='textarea' placeholder="Your Message..." />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
              </Form>
            </Container>
        </div>
    </div>
  )
}

export default FormConact
