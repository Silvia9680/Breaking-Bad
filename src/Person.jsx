
import React from 'react';
import './styles.css';

 const Person = ( { img, name, nickname } ) => {
  return (
    <section className = 'card info'>
        <img className  = 'img' src = { img } alt = { name }/>
        <p>Name: { name }</p>
        <p>Nickname: { nickname }</p>
    </section>
  )
}

export default Person;
