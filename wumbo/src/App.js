import React from "react";
import Top from "./component/top";
import ForEveryone from "./component/forevery";
import Features from './component/features'
import Preview from "./component/preview";
import './index.css'
import { buttonImages, ulArray, items, featuresDesign, featuresDesignTwo } from './data';

function App() {
  return (
    <div className='bg-[#E4EFFF] font-DM overflow-x-hidden'>
      <Top ul={ulArray} button={buttonImages}/>
      <ForEveryone items={items}/>
      <Features featureOne={featuresDesign} featureTwo={featuresDesignTwo} />
      <Preview />
    </div>
  );
}

export default App;