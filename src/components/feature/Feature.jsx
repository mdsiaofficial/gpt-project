import React from 'react';
import "./feature.css";

const Feature = ({ title, text }) => (
  <div className="flex flex-row justify-center items-center gap-10 py-10">
    <div className="">
      <div className="text-left">
        <p className='w-16 h-1 bg-subtext'></p>
        <h1 className=' text-subtext text-3xl font-semibold '>{title}</h1>
      </div>

    </div>
    <div className="">
      <p className=' text-text text-1xl'>{text}</p>
    </div>
  </div>
);

export default Feature
