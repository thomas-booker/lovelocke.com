import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main';
import reportWebVitals from './reportWebVitals';
import Parallax from './Parallax';
import Navbar from './Navbar';
import Header from './Header';
import Aboutme from './Aboutme';
import Projects from './Projects';
import Footer from './Footer';
import Contact from './Contact';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Header />
    <Aboutme />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
