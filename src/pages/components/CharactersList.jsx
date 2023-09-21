import { Star } from '@mui/icons-material'
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material'

const CharactersList = ({ filteredUsers, addFavorite, favorites }) => {
  return (
    <Paper item='true' elevation={1}>
      <Typography sx={{ padding: '1rem' }} variant='h4' component='div'>
        Characters
      </Typography>
      <List
        sx={{
          overflowY: 'scroll',
          width: '100%',
          height: '20rem',
          '&::-webkit-scrollbar': {
            width: '12px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '6px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        }}
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
  )
}

export default CharactersList
