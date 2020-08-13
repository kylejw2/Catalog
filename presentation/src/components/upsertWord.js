import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, FormGroup, Label } from 'reactstrap';

const UpsertWord = (props) => {
  const [modal, setModal] = useState(false);
  const [word, setWord] = useState(async() => {
    // await fetch();
    return {...props.word}
  })
  const [frontEnd, setFrontEnd] = useState(() => {
    if (props.word !== undefined && props.word.meta.findIndex(ele => ele === 'front-end') !== -1) {
      return true;
    }
    return false;
  });
  const [backEnd, setBackEnd] = useState(() => false);
  const [style, setStyle] = useState(() => false);
  const [data, setData] = useState(() => false);

  const handleChangeFrontEnd = () => {
    const prev = frontEnd;
    setFrontEnd(!prev);
  }
  const handleChangeBackEnd = () => {
    const prev = backEnd;
    setBackEnd(!prev);
  }
  const handleChangeStyle = () => {
    const prev = style;
    setStyle(!prev);
  }
  const handleChangeData = () => {
    const prev = data;
    setData(!prev);
  }

    const toggle = () => setModal(!modal);

    const handleClickUpdate = async () => {
        const data = {...word};
        delete data._id;
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        await fetch(`${process.env.REACT_APP_API_URL}/glossary/${word._id}`, options);
        toggle();
        props.refresh();
    }
  
    const addDefinition = () => {
      const obj = {...word};
      obj.definition.push('');
      setWord(obj);
    }
    const removeDefinition = () => {
      const obj = {...word};
      obj.definition.pop();
      setWord(obj);
    }
  
    const handleChange = (event) => {
      const obj = {...word};
      obj[event.target.name] = event.target.value;
      setWord(obj);
    }
    const handleChangeDef = (event, index) => {
      const obj = {...word};
      obj.definition[index] = event.target.value;
      setWord(obj);
    }

    let definitions = [''];
    word.term !== undefined ? definitions = word.definition.map((def, index) => {
        return <Input style={{marginBottom: "10px", height: "auto"}} type="textarea" name="definition" id="definition" value={def} onChange={event => handleChangeDef(event, index)} />
      }) : definitions = [''];
  
    return (
      <span>
        <Button outline color="secondary"  style={{marginLeft: "10px", marginTop: "10px"}} onClick={toggle}><i className="fa fa-gear" style={{fontSize:"20px"}}></i></Button>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Term</ModalHeader>
        <ModalBody>
        <Form>
            <FormGroup>
                <Input type="text" name="term" id="term" placeholder="Word/Phrase" value={word.term} onChange={event => handleChange(event)}/>
            </FormGroup>
            <FormGroup>
                <Label for="definition" style={{marginRight: "10px"}}>Definition</Label>
                {definitions}
                <Button outline color="primary" style={{margin: "10px 10px 10px 0"}} onClick={addDefinition}>Additonal Definition</Button>
                <Button outline color="danger" style={{margin: "0"}} onClick={removeDefinition}>Remove Definition</Button>
            </FormGroup>
            <legend>Select all that apply</legend>
            <FormGroup check>
                <Label check>
                <Input type="checkbox" name="frontEnd" checked={frontEnd} onChange={handleChangeFrontEnd}/>
                Front-end
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                <Input type="checkbox" name="backEnd" checked={backEnd} onChange={handleChangeBackEnd}/>
                Back-end
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                <Input type="checkbox" name="style" checked={style} onChange={handleChangeStyle}/>
                Style
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                <Input type="checkbox" name="data" checked={data} onChange={handleChangeData}/>
                Data
                </Label>
            </FormGroup>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleClickUpdate}>Update Term</Button>
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </span>
    );
}

export default UpsertWord;