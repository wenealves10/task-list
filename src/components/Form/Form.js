import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

export default function Form({ handleChange, handleClick, newList }) {
  return (
    <form action="#">
      <input type="text" onChange={handleChange} value={newList} />
      <button type="submit" onClick={handleClick}>
        <i className="fa fa-plus" />
        {' '}
        Adicionar
      </button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  newList: PropTypes.string.isRequired,
};
