import React from 'react';
import MyNav from './myNav';
import MyJumbotron from './myJumbotron';
import {Button} from 'reactstrap';
import '../App.css';
// import MyCarousel from './myCarousel';

function App() {
  return (
    <div>
        <MyNav />
        <MyJumbotron />
        {/* <MyCarousel /> */}
        <div class='container-fluid padding'>
        <div class='row text-center padding'>
        <div class='col-sm-6'>
            <h3>PROGRAMMING BASICS</h3>
            <p>Learn essentials to programming that can be applied to other computer languages, such as C++, Java, or Python.</p>
        </div>
        <div class='col-sm-6'>
          <h3>INDUSTRY PROJECTS</h3>
            <p>After becoming familiar with my simple glossary of web development, learn to build industry projects that are sure to catch the attention of potential recruiters.</p>
        </div>
        <div class='col-sm-12'>
            <h3>WEB APPLICATIONS</h3>
            <p>Build fully functional web applications from UI to database management after understanding the core principles behind web development.</p>
        </div>
        </div>
        <div class='row text-center padding'>
        <div class='col-sm-12'>
        <Button color="success" href="/glossary/">Begin Web Development Tutorial</Button>
        </div>
        </div>
        
        <hr class='my-4' />
        
        </div>
    </div>
  );
}

export default App;
