import React from 'react';

const Progres = ({ title, width, text }) => {
  return (
    <div>
      <h5>{title}</h5>
      <div className="progres-bar">
        <p>{text}</p>
        <div className="progres">
          <span style={{ width: width }}></span>
        </div>
      </div>
    </div>
  );
};

export default Progres;
