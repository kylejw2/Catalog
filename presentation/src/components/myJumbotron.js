import React from 'react';
import {
    Container,
    Row,
    Col,
    Jumbotron,
    Button
  } from 'reactstrap';
  import AddWord from './addWord';

  const MyJumbotron = (props) => {
      return (
        <Jumbotron>
        <Container>
            <Row>
                <Col>
                    <h1 className="display-title">Glossary</h1>
                    <div className='buttons'>
                        <AddWord refresh={props.refresh}/>
                        <Button color='secondary' onClick={props.toggle}>Popularity</Button>
                    </div>
                </Col>
            </Row>
        </Container>
        </Jumbotron>
      )
  }

export default MyJumbotron;