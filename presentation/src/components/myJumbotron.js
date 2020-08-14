import React, {useState} from 'react';
import {
    Container,
    Row,
    Col,
    Jumbotron,
    Button,
    ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup,
    Form, Input
  } from 'reactstrap';
  import AddWord from './addWord';

  const MyJumbotron = (props) => {

    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);

    const [searchInput, updateSearch] = useState(() => '');
    const handleChange = (event) => {
        updateSearch(event.target.value);
    }
    const handleClick = () => {
        props.searchResult(searchInput);
    }

    const handleEnter = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            props.searchResult(searchInput);
        }
    }

      return (
        <Jumbotron className="myJumbo">
        <Container>
            <Row>
                <Col md="4" sm="12" lg="6">
                    <h1 className="display-title">Glossary</h1>
                </Col>
                    <div className="buttons col-sm-6 col-md-4 col-lg-3">
                        <AddWord refresh={props.refresh}/>
                        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret>
                                Sort by:
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={props.togglePop}>Popularity</DropdownItem>
                                <DropdownItem onClick={props.toggleArch1}>Archived</DropdownItem>
                                <DropdownItem onClick={props.toggleArch2}>Not Archived</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>
                    <div className="buttons col-sm-6 col-md-4 col-lg-3">
                        <Form className="search-bar" >
                            <FormGroup>
                                <Input type="text" name="searchInput" id="searchInput" value={searchInput} onKeyDown={handleEnter} onChange={handleChange} placeholder="Search" style={{marginTop: "20px", height:"40px !important"}}/>
                            </FormGroup>
                        </Form>
                        <Button onClick={handleClick}><i className="fa fa-search"></i></Button>
                    </div>
            </Row>
        </Container>
        </Jumbotron>
      )
  }

export default MyJumbotron;