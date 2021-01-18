import React from 'react';
import './Form.css';

export default (props) => (
  <form action="#">
    <input type="text" onChange={props.func.handleChange} />
    <button type="submit">Enviar</button>
  </form>
);
