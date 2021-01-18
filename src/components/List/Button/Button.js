/* eslint-disable no-unused-vars */
import React from 'react';
import './Button.css';

export default (props) => (
  <button type="button" className={props.icon} onClick={(e) => props.func(e, props.index)}>
    <i className={`fa fa-${props.icon}`} />
  </button>
);
