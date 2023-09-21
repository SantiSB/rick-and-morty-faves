import { Box, TextField, InputAdornment, Grid } from '@mui/material/'
import { AccountCircle } from '@mui/icons-material'
import FavoritesList from './FavoritesList'
import CharactersList from './CharactersList'
import useCharacterManagement from '../hooks/useCharacterManagement'

function ListCharacters() {
  const {
    search,
    favorites,
    addFavorite,
    removeFavorite,
    handleSearch,
    filteredUsers,
  } = useCharacterManagement()

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
