import React from 'react';
import './error-message.css';

const ErrorMessage = (props) => {
  const error = props.error;

  return (
    <div className="error-container ui negative message">
      <div className="error-message ui red message">
        <h1>{error}</h1>
      </div>
    </div>
  );
};

export default ErrorMessage;
