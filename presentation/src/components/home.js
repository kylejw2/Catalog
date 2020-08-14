import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';
import Footer from './footer';
import '../App.css';
import MyNav from './myNav';


function App() {
  return (
    <div>
        {/* <MyJumbotron /> */}
        {/* <MyCarousel /> */}
        <MyNav />
        <div className='container-fluid padding'>
          <div className='row welcome text-center'>
              <div className='col-12'>
                  <h1 className='display-3 main-title'>Web Development Glossary.</h1>
              </div>
              <hr/>
              <div className='col-12'>
                  <p className='lead'>Only the most popular terms in web development.</p>
              </div>
          </div>
        </div>
        <div className='container-fluid padding'>
        <div className='row text-center padding'>
        <div className='col-lg-4 col-md-6 extra-padding'>
          <h3>SEARCH</h3>
            <p>Have a word in mind? Search for it in the glossary here.</p>
            <Link to="/glossary/"><Button color="info">Search</Button></Link>
        </div>
        <div className='col-lg-4 col-md-6 extra-padding'>
            <h3>POPULARITY</h3>
            <p>My algorithm finds the most relevant words/phrases for you.</p>
            <Link to="/glossary/"><Button color="info">Popularity</Button></Link>
        </div>
        <div className='col-lg-4 col-md-12 extra-padding'>
            <h3>TOPICS</h3>
            <p>Want to be an expert in a specific topic? Start here.</p>
            <Link to="/glossary/"><Button color="info">Topic</Button></Link>
        </div>
        </div>
        <hr className='my-4' />
        </div>
        <Footer />
    </div>
  );
}

export default App;
