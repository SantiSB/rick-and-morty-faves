import { Delete } from '@mui/icons-material'
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

const FavoritesList = ({ favorites, removeFavorite }) => {
  return (
    <Paper item='true' elevation={1}>
      <Typography sx={{ padding: '1rem' }} variant='h4' component='div'>
        Favorites
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
  )
}

export default FavoritesList
