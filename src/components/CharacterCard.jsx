import React from 'react';

export const CharacterCard = ({ character, handleClick, buttonText }) => (
  <div key={character.id} className="characters__card" >
    <h2>{character.name}</h2>
    <img className={character.status === 'Dead' ? 'gray-scale' : ''} src={character.image} alt="" />
    <button type="button" onClick={() => handleClick(character)}>{buttonText}</button>
  </div>
);
