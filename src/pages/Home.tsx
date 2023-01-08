import { ReactElement } from 'react'

const Home = (): ReactElement => {
  return (
    <div>
      <h1>My blog doesn't have a name...</h1>

      <h2>Things to read</h2>

      <h3>Poems</h3>
      <ul>
        <li><a href="/poems/nightsky">Night Sky</a></li>
      </ul>
      
    </div>
  )
}

export default Home