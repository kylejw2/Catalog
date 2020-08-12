import React from 'react';
import Word from './word';
import icon from '../assets/icon.png';
import MyJumbotron from './myJumbotron';

class Glossary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [{}],
            popularity: false
        }
    }

    handleToggle = () => {
        const current = this.state.popularity;
        this.refresh(!current);
        console.log(!current);
    }

    componentDidMount() {
        this.refresh();
    }

    refresh = async (popularity = false) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/glossary`);
        const data = await response.json();
        data.sort((a,b) => {
            var termA = a.term.toUpperCase();
            var termB = b.term.toUpperCase();
            if (termA < termB) {return -1};
            if (termB > termA) {return 1};
            return 0;
        });
        // IMPLEMENT THE QUICK SORT ALGORITHM ACCORDING TO NUMBER OF VISITS. THIS MUST BE DONE AFTER AN UPDATE METHOD IS CREATED FOR THE BACK-END
        popularity ? this.setState({popularity: popularity}) : this.setState({words: data, popularity: popularity})
    }

    
    render() {
        const words = this.state.words.map(word => <Word key={word._id} word={word} />);
        return (
            <>
            <MyJumbotron toggle={this.handleToggle} refresh={this.refresh} />
            <div className='container-fluid padding'>
                <div className="words">
                    {words}
                </div>
            </div>
            <footer>
                <div className='container-fluid padding'>
                <div className='row text-center'>
                    <div className='col-md-4'>
                        <img src={icon} alt='' width='60px'/>
                        <hr className='light'/>
                        <p>801-509-8540</p>
                        <p>kylejamwright@gmail.com</p>
                        <p>Greater Salt Lake Area</p>
                    </div>
                    <div className='col-md-4'>
                        <hr className='light'/>
                        <h5>My hours</h5>
                        <hr className='light'/>
                        <p>Monday-Friday: 8am - 5pm</p>
                        <p>Saturday: 10am - 4pm</p>
                        <p>Sunday: Closed</p>
                    </div>
                    <div className='col-md-4'>
                        <hr className='light'/>
                        <h5>Service Area</h5>
                        <hr className='light'/>
                        <p>Utah</p>
                        <p>All other states</p>
                        <p>Wherever you are</p>
                    </div>
                    <div className='col-12'>
                        <hr className='light-100'/>
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