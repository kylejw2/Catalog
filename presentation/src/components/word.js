import React, { useState } from 'react';
import { Collapse, CardBody, Card, Button } from 'reactstrap';
import UpsertWord from './upsertWord';

const Word = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    let count = true;

    const trackData = async () => {
      // const options = {
      //     method: 'PATCH',
      //     headers: {
      //         'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify()
      // }
      // await fetch(`${process.env.REACT_APP_API_URL}/glossary/${props.word._id}`, options);
      // count = !count;
    }

    const toggle = () => {
      setIsOpen(!isOpen);
      count ? trackData() : count = !count;
    }

    let definition = [''];
    props.word.term !== undefined ? (definition = props.word.definition.reduce((acc, def, index) => index === props.word.definition.length - 1 ? acc += def : acc += def + ' ', '')) 
    : definition = '';

    const handleClick = () => {
      props.remove(props.word._id);
    }

    
    
    return (
    <div className="word">
      <h2 onClick={toggle} className='display-4'>{props.word.term}</h2>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          {definition}
          </CardBody>
        </Card>
          <Button outline color="danger" style={{marginTop: "10px"}} onClick={handleClick}><i className="fa fa-trash-o" style={{fontSize:"20px"}}></i></Button>
          {/* <Button outline color="secondary"  style={{marginLeft: "10px", marginTop: "10px"}} onClick={handleClickUpdate}><i className="fa fa-gear" style={{fontSize:"20px"}}></i></Button> */}
          <UpsertWord word={props.word} refresh={props.refresh}/>
      </Collapse>
    </div>
  );
}

export default Word;