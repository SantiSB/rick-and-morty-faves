import {useContext} from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ThemeContext from '../context/ThemeContext';

/**
 * App Bar with App Title
 * @return {JSX.Element}
 */
function AppBarSearch() {
  const color = useContext(ThemeContext);

  return (
      <AppBar position="static" color={`${color}`}>
        <Toolbar>
          <Typography variant="h6">
            Rick And Morty: Characters Searcher
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

export default AppBarSearch