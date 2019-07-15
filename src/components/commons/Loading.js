import React from 'react';
import loading from './loading.gif';

const Loading = () => (
  <div className="middle">
    <h5 className="lead-title">Loading ...</h5>
    <img src={loading} alt="loading..." className="loader" />
  </div>
);

export default Loading;
