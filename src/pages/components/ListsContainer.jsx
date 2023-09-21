import { useState, useReducer, useMemo, useCallback } from 'react'
import useCharacters from '../hooks/useCharacters'
import { Box, TextField, InputAdornment, Grid } from '@mui/material/'
import { AccountCircle } from '@mui/icons-material'
import { favoriteReducer, initialState } from '../reducers/favorites'
import FavoritesList from './FavoritesList'
import CharactersList from './CharactersList'

const API = 'https://rickandmortyapi.com/api/character'

/**
 * A component that displays a list of characters and allows users to add and remove favorites.
 * @return {JSX.Element}
 */
function ListCharacters() {
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

  return (
    <Box sx={{ padding: 3 }}>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            </InputAdornment>
          ),
        }}
        variant='outlined'
        value={search}
        onChange={(e) => handleSearch(e)}
        placeholder='Search Characters'
        style={{ display: 'flex', justifyContent: 'center' }}
      />
      <Grid
        container
        sx={{ textAlign: ' center', padding: '3rem' }}
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <CharactersList
            filteredUsers={filteredUsers}
            addFavorite={addFavorite}
            favorites={favorites}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FavoritesList
            favorites={favorites}
            removeFavorite={removeFavorite}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ListCharacters
