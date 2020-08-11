import React from 'react';
import Word from './word';
import icon from '../assets/icon.png';
import {Button} from 'reactstrap';

class Glossary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [{}],
            alphabetize: false
        }
    }

    handleToggle = () => {
        const current = this.state.alphabetize;
        this.refresh(!current);
        console.log(!current);
    }

    componentDidMount() {
        this.refresh();
    }

    refresh = async (alphabetize = false) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/glossary`);
        const data = await response.json();
        alphabetize ? this.setState({words: data.sort((a, b) => {
            const termA = a.term.toUpperCase();
            const termB = b.term.toUpperCase();
            if (termA < termB) {return -1};
            if (termA > termB) {return 1};
            return 0;
        }), alphabetize: alphabetize}) : this.setState({words: data, alphabetize: alphabetize})
    }

    
    render() {
        const words = this.state.words.map(word => <Word word={word} />);
        return (
            <>
            <div className='container-fluid padding'>
                <div className='row welcome text-center'>
                    <div className='col-12'>
                        <h1 className='display-4'>Glossary.</h1>
                    </div>
                    <hr/>
                    <div className='col-12'>
                        <p className='lead'>Connect the front-end to the back end and display all of the words/phrases.</p>
                    </div>
                    <div className='col-12'>
                        <Button color='primary' onClick={this.handleToggle}>Alphabetize</Button>
                    </div>
                </div>
                <div className="words">
                    {words}
                </div>
            </div>
            <footer>
                <div class='container-fluid padding'>
                <div class='row text-center'>
                    <div class='col-md-4'>
                        <img src={icon} alt='' width='60px'/>
                        <hr class='light'/>
                        <p>801-509-8540</p>
                        <p>kylejamwright@gmail.com</p>
                        <p>Greater Salt Lake Area</p>
                    </div>
                    <div class='col-md-4'>
                        <hr class='light'/>
                        <h5>My hours</h5>
                        <hr class='light'/>
                        <p>Monday-Friday: 8am - 5pm</p>
                        <p>Saturday: 10am - 4pm</p>
                        <p>Sunday: Closed</p>
                    </div>
                    <div class='col-md-4'>
                        <hr class='light'/>
                        <h5>Service Area</h5>
                        <hr class='light'/>
                        <p>Utah</p>
                        <p>All other states</p>
                        <p>Wherever you are</p>
                    </div>
                    <div class='col-12'>
                        <hr class='light-100'/>
                        <h5>&copy; kylejw2.github.io</h5>
                    </div>
                </div>
                </div>
            </footer>
            </>
        )
    }
}

export default Glossary;