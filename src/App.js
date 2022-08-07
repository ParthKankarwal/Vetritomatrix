import React from 'react';
import Header from './Component/Header';
import Feature from './Component/Feature';
import About from './Component/about';
import aboutimage from './images/Frame 19.png';
import aboutimage1 from './images/download.png';
import Contact from './Component/contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} title="Deceptive people love fake news because it makes their reality seem legitimate(and therefore more profitable)." button="Get the App"/>
      <About image={aboutimage1} title="The term, 'Fake News', seems to have died since the president left office." button="Get the App"/>
      <Contact/>
    </div>
  );
}

export default App;
