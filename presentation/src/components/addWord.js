import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const AddWord = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(() => false);
  const [word, setWord] = useState(() => {return {term: '', definition: [''], visits: 0, meta: []}})
  const [frontEnd, setFrontEnd] = useState(() => false);
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


  const toggle = () => {
      setModal(!modal);
      setWord({term: '', definition: [''], visits: 0, meta: []});
    };

  const handleAddWord = async () => {
    if (frontEnd) {const obj = {...word}; obj.meta.push('front-end'); setWord(obj)};
    if (backEnd) {const obj = {...word}; obj.meta.push('back-end'); setWord(obj)};
    if (style) {const obj = {...word}; obj.meta.push('style'); setWord(obj)};
    if (data) {const obj = {...word}; obj.meta.push('data'); setWord(obj)};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(word)
    }
    await fetch(`${process.env.REACT_APP_API_URL}/glossary`, options);
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

  const definitions = word.definition.map((def, index) => {
    return <Input style={{marginBottom: "10px"}} type="textarea" name="definition" id="definition" key={index} value={def} onChange={event => handleChangeDef(event, index)} />
  })

  return (
    <div>
      <Button color="secondary" onClick={toggle}>Add Term</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
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
          <Button color="primary" onClick={handleAddWord}>Add Term</Button>
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddWord;