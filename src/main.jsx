import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Person from './Person';
import './styles.css';

const Main = () => {

  const[ info, setInfo ] = useState([]);
  const [ value, setValue ] = useState ('');

  useEffect(() => {
   
  }, []);

  const getMain = async() => {
      const url = `https://www.breakingbadapi.com/api/characters`;
      const resp = await fetch(url);
      const data = await resp.json();

      console.log( data );
      setInfo( data );
  
  }

  const handleChange = (e) =>{
    setValue( e.target.value )
  }

  const filterNames = info.filter( person => {
    return person.name.toLowerCase().includes(value.toLowerCase());
  })
    getMain();
  return (     
    <main>
      <input 
      type= 'text'
      placeholder = 'Escribe el nombre de tu personaje'
      className = 'form-control'
      onChange = { handleChange }
      value = { value } 
      />
      <ul>
        {
          filterNames.map(noun => <Person key = { noun.char_id } {...noun }/> )
        }
      </ul>

    </main>
  )
}

export default Main
