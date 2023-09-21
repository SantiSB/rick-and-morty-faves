import AppBarSearch from './components/AppBarSearch'
import ListsContainer from './components/ListsContainer'

/**
 * Main component of the Rick and Morty Faves App.
 * @return {JSX.Element}
 */
function RickAndMortyFaves() {
  return (
    <>
      <AppBarSearch />
      <ListsContainer />
    </>
  )
}

export default RickAndMortyFaves
