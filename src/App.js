import React from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { SliderData } from './data/SliderData';
import Hero from './components/Hero';


function App() {
  return (
   <>
    <GlobalStyle/> 
    <Navbar />
    <Hero slides={SliderData}/>
   </>
  );
}

export default App;
