import './App.css'
import React from 'react';
// import Article from "./components/article/Article";
// import Brand from "./components/brand/Brand";
// import CTA from "./components/cta/CTA";
// import Feature from "./components/feature/Feature";
// import Navbar from "./components/navbar/Navbar";

import { Article, Brand, CTA, Feature, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, What, GPTfeature } from './containers';

function App() {

  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>

      <Brand />
      {/* <Article /> */}
      <What />
      <GPTfeature />
      <Features />
      {/* <Possibility /> */}
      {/* <CTA /> */}
      {/* <Blog /> */}
      {/* <Feature /> */}
      {/* <Footer /> */}

    </div>
  )
}

export default App
