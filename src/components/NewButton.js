import React from 'react';

const NewButton = ({ filter, button }) => {
  return (
    <div>
      {button.map((butt, index) => {
        return <button key={index}>{butt}</button>;
      })}
    </div>
  );
};

export default NewButton;
