import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';

const Word = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    let definition = '';
    props.word.term !== undefined ? (definition = props.word.definition.reduce((acc, def, index) => index === props.word.definition.length - 1 ? acc += def : acc += def + ' ', '')) 
    : definition = '';
    
    return (
    <div className="word">
      <h2 onClick={toggle} className='display-4'>{props.word.term}</h2>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          {definition}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Word;