import React from 'react';
import {
    Container,
    Row,
    Col,
    Jumbotron,
    Button
  } from 'reactstrap';

  const MyJumbotron = () => {
      return (
        <Jumbotron primary>
        <Container>
            <Row>
                <Col>
                    <h1>Want to learn the basics of web development?</h1>
                    <p>
                        <Button
                            tag="a"
                            color="success"
                            size="large"
                            href="/glossary/"
                        >
                            Click Here
                        </Button>
                    </p>
                </Col>
            </Row>
        </Container>
        </Jumbotron>
      )
  }

export default MyJumbotron;