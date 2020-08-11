import React from 'react';
import {Button} from 'reactstrap';
import '../App.css';

function App() {
  return (
    <div>
        {/* <MyJumbotron /> */}
        {/* <MyCarousel /> */}
        <div className='container-fluid padding'>
        <div className='row text-center padding'>
        <div className='col-md-4 col-sm-6'>
          <h3>SEARCH</h3>
            <p>Have a word in mind? Search for it in the glossary here.</p>
            <Button color="info" href="/glossary/">Search</Button>
        </div>
        <div className='col-md-4 col-sm-6'>
            <h3>ALPHABETICAL</h3>
            <p>Learn each word/phrase in a simple alphabetical order.</p>
            <Button color="info" href="/glossary/">Alphabetical</Button>
        </div>
        <div className='col-md-4 col-sm-12'>
            <h3>TOPICS</h3>
            <p>Want to be an expert in a specific topic? Start here.</p>
            <Button color="info" href="/glossary/">Topic</Button>
        </div>
        </div>
        <hr className='my-4' />
        </div>
        
        <div class='container-fluid padding'>
          <div class='row welcome text-center'>
              <div class='col-12'>
                  <h1 class='display-4'>Web Development Glossary.</h1>
              </div>
              <hr/>
              <div class='col-12'>
                  <p class='lead'>Only the most popular terms in web development.</p>
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
