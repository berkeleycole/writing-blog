import { ReactElement, useState } from 'react'

const Riddle1 = (): ReactElement => {
  const [showSolution, setShowSolution] = useState(false)
  return (
    <div style={{marginLeft: '200px'}}>
      <h1>Riddle #1</h1>
      
      <div>
        I am an asymmetrical bird<br />
        and with my wings I span two worlds<br />
        one wing stretching ever star-ward<br />
        the shorter straining for the depths<br />
        and with these wings I roam far and wide<br />
        no one can go further<br />
      </div>

      <p>-- drafted 2022, last edit Jan 7 2023</p>

      <button onClick={() => setShowSolution(!showSolution)}>{showSolution ? 'Hide' : 'Show'} Solution</button>

      {showSolution && 
        <>
          <p style={{fontWeight: 'bold'}}>A sailboat</p>

          <p>Explanation:</p>
          <p>
            The idea came from the concept that a sailboat's sail works on the same <br />
            physics principle (<a href="https://en.wikipedia.org/wiki/Bernoulli%27s_principle" target="_blank">Bernoulli's Principle</a>) as a wing.<br />
          </p>
        </>
      }
    </div>
  )
}

export default Riddle1