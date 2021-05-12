import React, { useState, useReducer, useMemo, useRef, useCallback, useContext } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { SearchBox } from './SearchBox';
import { ThemeContext } from '../context/ThemeContext';

import '../styles/Characters.css';
import { CharacterCard } from './CharacterCard';

const API = 'https://rickandmortyapi.com/api/character/';

const initialState = {
  favorites: []
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }


    case 'REMOVE_FROM_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(favorite => favorite !== action.payload)
      }

    default:
      return state;
  }
}

export const Characters = () => {

  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);
  const [theme] = useContext(ThemeContext);
  const characters = useCharacters(API);

  const handleClick = (favorite) => {
    const existsCharacter = favorites.favorites.find(fav => fav === favorite);

    if (!existsCharacter) {
      dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
    }
  }

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  }, []
  );

  const removeFromFavorites = (favorite) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITE', payload: favorite });
  }

  const filteredCharacters = useMemo(() => (
    characters.filter((character) => {
      return character.name.toLowerCase().includes(search.toLowerCase());
    })
  ), [characters, search]);


  const isDarkModeActive = theme.type === 'dark';

  return (
    <div className={`characters ${isDarkModeActive ? 'dark-mode' : 'light-mode'}`}>

      {favorites.favorites.length > 0 &&
        <>
          <h2 className="characters__subtitle">My Favorites</h2>
          <div className="characters-container">
            {favorites.favorites.map((favorite) => (
              <CharacterCard
                key={favorite.id}
                character={favorite}
                handleClick={removeFromFavorites}
                buttonText='Remove from favorites'
              />
            ))}
          </div>
        </>
      }

      <section className="characters__section">
        <h2 className="characters__subtitle">Characters</h2>
        <SearchBox search={search} searchInput={searchInput} handleSearch={handleSearch} />
      </section>


      <div className="characters-container">
        {filteredCharacters.map(character => (
          <CharacterCard
            key={character.id}
            character={character}
            handleClick={handleClick}
            buttonText='Add to favorites'
          />
        ))}
      </div>
    </div>
  );
}
