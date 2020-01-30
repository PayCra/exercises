import React from 'react';
import './Hello.css';

const Hello = (props) => {
    return (
        <span>
          <span className="Pink">Hello, </span>
          <span className={props.mic}>{props.name}</span>
      </span>
    );
};

export default Hello;