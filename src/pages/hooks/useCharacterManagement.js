import { useState, useReducer, useMemo, useCallback } from 'react'
import useCharacters from '../hooks/useCharacters'
import { favoriteReducer, initialState } from '../reducers/favorites'

const API = 'https://rickandmortyapi.com/api/character'

function useCharacterManagement() {
  const [search, setSearch] = useState('')
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
  const characters = useCharacters(API)

  const addFavorite = (favorite) => {
    if (!favorites.favorites.includes(favorite)) {
      dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    }
  }

  const removeFavorite = (favorite) => {
    dispatch({ type: 'REMOVE_TO_FAVORITE', payload: favorite })
  }

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value)
  }, [])

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase())
      }),
    [characters, search]
  )

  return {
    search,
    setSearch,
    favorites,
    addFavorite,
    removeFavorite,
    handleSearch,
    filteredUsers,
  }
}

export default useCharacterManagement
