import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project1 from './Project1';
import ProjectPage2 from './ProjectPage2';
import Project3 from './Project3';
import ProjectPage4 from './ProjectPage4';
import ProjectMd from './ProjectMd';
// import ProjectQr from './ProjectQr';
import Project1Bg from './Project1Bg';
import ProjectQr from './ProjectQr';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Project1/>
    <ProjectPage2/>
    <Project3/>
    <ProjectPage4/>
    <ProjectMd/>
    <Project1Bg/>
    <ProjectQr/>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
