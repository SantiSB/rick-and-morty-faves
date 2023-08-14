import { useState, useReducer, useMemo, useCallback } from 'react'
import useCharacters from '../hooks/useCharacters'
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Paper,
} from '@mui/material/'
import { AccountCircle, Star, Delete } from '@mui/icons-material'

const initialState = {
  favorites: [],
}

const API = 'https://rickandmortyapi.com/api/character'

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    case 'REMOVE_TO_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite !== action.payload
        ),
      }
    default:
      return state
  }
}

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
          <Paper item elevation={1}>
            <Typography sx={{ padding: '1rem' }} variant='h4' component='div'>
              Characters
            </Typography>
            <List
              style={{ overflowY: 'scroll', width: '100%', height: '20rem' }}
            >
              {filteredUsers.map((character) => (
                <ListItem
                  key={character.name}
                  secondaryAction={
                    <IconButton
                      edge='end'
                      aria-label='delete'
                      onClick={() => addFavorite(character)}
                    >
                      <Star
                        style={{
                          color: favorites.favorites.includes(character)
                            ? '#ffbf00'
                            : '#a8a8a8',
                        }}
                      />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar src={character.image}></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={character.name} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper item elevation={1}>
            <Typography sx={{ padding: '1rem' }} variant='h4' component='div'>
              Favorites
            </Typography>

            <List
              style={{ overflowY: 'scroll', width: '100%', height: '20rem' }}
            >
              {favorites.favorites.map((favorite) => (
                <ListItem
                  key={favorite.name}
                  secondaryAction={
                    <IconButton
                      edge='end'
                      aria-label='delete'
                      onClick={() => removeFavorite(favorite)}
                    >
                      <Delete />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar src={favorite.image}></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={favorite.name} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ListCharacters
