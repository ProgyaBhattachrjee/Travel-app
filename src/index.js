import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import S1 from './S1';
import S2 from './S2';
import S3 from './S3';
import S4 from './S4';
import Foot from './Foot';
import './styles.css'
const App = () => {
  return (
    <div>
    <Nav/>
    <S1/>
    <S2/>
    <S3/>
    <S4/>
    <Foot/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
