"use client"

import React, { ReactNode } from 'react'


const SubsribeBanner = () => {
  return (
    <div className='banner__Container'>
      <div className="container ">
        <h3>Get all the latest news, updates and documents delivered directly to your inbox instantly.</h3>
        <button type="button" className='subscribe__Button'> Subscribe to ANSSD</button>
      </div>
      <style jsx>{`
        .banner__Container {
          display: flex;
          min-height: 150px;
          background: #EFEFEF;
        }
        .banner__Container .container {
          display: grid;
          align-items: center;
          justify-content: space-between;
          grid-template-areas: 'text text btn';
          width: 100%;
        }
        .banner__Container h3 {
          color: black;
          font-weight: 600;
          font-size: 22px;
          grid-area: text;
        }

        .subscribe__Button {
          border: none;
          height: 51px;
          width: 253px;
          color: white; 
          background: #2161CD;
          font-size: 16px;
          font-weight: 700;
          border-radius: 25px;
          grid-area: btn
        }

      `}</style>
    </div>
  );
}

export default SubsribeBanner;