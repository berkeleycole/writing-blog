import { ReactElement } from 'react'

const Home = (): ReactElement => {
  return (
    <div>
      <h1>My blog doesn't have a name...</h1>

      <h3>Poems</h3>
      <ul>
        <li><a href="/poems/nightsky">Night Sky</a></li>
        <li><a href="/poems/coventry">Coventry</a></li>
        <li><a href="/poems/riddle">Riddle #1</a></li>
        <li><a href="/poems/pactwiththeocean">Pact with the Ocean</a></li>
        <li><a href="/poems/embalming">An Embalming</a></li>
        <li><a href="/poems/cupsofair">Cups of Air</a></li>
      </ul>

      <h3>Musings</h3>
      <ul>
        <li><a href="/musings/religious/collected">Collected Religious Thoughts</a></li>
      </ul>
      
    </div>
  )
}

export default Home