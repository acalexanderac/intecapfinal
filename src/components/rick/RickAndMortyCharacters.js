import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Image } from 'react-bootstrap';
const RickAndMortyCharacters = () => {
    const [characters, setCharacters] = useState([]);
  
    useEffect(() => {
      fetchCharacters();
    }, []);
  
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
  
    return (
      <div>
      
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {characters.map((character) => (
            <div key={character.id} style={{ margin: '10px' }}>
              <Image src={character.image} alt={character.name} rounded />
              <p>{character.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RickAndMortyCharacters;
  