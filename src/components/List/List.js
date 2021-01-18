/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import Button from './Button/Button';
import './List.css';

export default class List extends Component {
   handleClick = async (e) => {
     if (e.target.style.color === 'rgb(255, 0, 0)' || e.target.style.color === '') {
       e.target.style.color = 'rgb(0, 255, 0)';
       e.target.style.textDecoration = 'line-through';
     } else {
       e.target.style.color = 'rgb(255, 0, 0)';
       e.target.style.textDecoration = 'none';
     }
   }

   render() {
     return (
       <ul className="list-task">
         {this.props.list.map((lst, index) => (
           <li key={index}>
             <p onClick={this.handleClick}>
               {index + 1}
               {': '}
               {lst}
             </p>
             <Button type="button" key={index} />
           </li>
         ))}
       </ul>
     );
   }
}
