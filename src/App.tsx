import { useState } from 'react'
import nasaLogo from './assets/nasa-logo-3.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={nasaLogo} className="nasa" alt="Nasa logo" />
        </div>
        <div>
          <h1>National Aeronautics and Space Administration</h1>
          <p>
            NASA was established in 1958 by President Dwight D. Eisenhower in response to the Soviet Union's launch of the Sputnik satellite, aiming to ensure that US space exploration was peaceful and civilian-led.
          </p>
          <p>
            NASA is responsible for some of humanity's greatest achievements, including the Apollo 11 mission which put the first humans on the Moon in 1969, the deployment of the Hubble and James Webb space telescopes, and landing multiple robotic rovers on Mars.
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  )
}

export default App
