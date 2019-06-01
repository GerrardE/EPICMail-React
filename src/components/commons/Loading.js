import React from 'react';
import loader from './material-loader.gif';

export const Loading = () => {
  return (
    <div>
      <img src={loader} alt="loading..." className="loader"></img>
    </div>
  )
}
