import React from 'react';

const Card = ({ expensetype, prefix,amount }) => {
  return (
    <div>
      <div className="card my-3" style={{height:"140px"}}>
        <div className="card-body text-start position-relative">
          {/* <i className={`bi ${icon} text-secondary text-muted position-absolute rotate-icon`} style={{ fontSize: '5rem', top: '-10px', right: '10px' }}></i> */}
          <p className="card-text">{expensetype}</p>
          <h2 className="card-title">{prefix}{amount}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
