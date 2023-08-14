import AppBarSearch from './components/AppBarSearch'
import ListCharacters from './components/ListCharacters'

/**
 * Main component of the Rick and Morty Faves App.
 * @return {JSX.Element}
 */
function RickAndMortyFaves() {
  return (
    <>
      <AppBarSearch />
      <ListCharacters />
    </>
  )
}

export default RickAndMortyFaves
