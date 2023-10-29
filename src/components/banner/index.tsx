"use client"

import React, { ReactNode } from 'react'

type BannerProps = {
  title: string;
  name: string;

  icon: ReactNode;
}

const Banner = ({ title, name, icon }: BannerProps) => {
  return (
    <>
      <div className="banner__Container">
        <h1>{title}</h1>
        <div className='navigation__Bar'>
          <div>{icon}</div>
          <div className=''>
            Home / {name}
          </div>
        </div>
      </div>
      <style jsx>{`
        .banner__Container {
          min-height: 200px;
          background: #2161cd;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 10px 0px;
        }

        .navigation__Bar {
          display: flex;
          gap: 0px 10px;
        }

        .banner__Container h1 {
          font-size: 48px;
          margin: 0px !important;
          font-weight: 800;
        }
      `}</style>
    </>
  );
}

export default Banner