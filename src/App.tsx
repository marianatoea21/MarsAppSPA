import nasaLogo from './assets/nasa-logo-3.png'
import './App.css'
import NasaInfo from "./components/NasaInfo/NasaInfo.tsx";
import ClickCounter from "./components/ClickCounter/ClickCounter.tsx";

function App() {

  return (
    <>
      <section id="center">
        <NasaInfo title="National Aeronautics and Space Administration"
                  firstParagraph="NASA was established in 1958 by President Dwight D. Eisenhower in response to the Soviet Union's launch of the Sputnik satellite, aiming to ensure that US space exploration was peaceful and civilian-led."
                  secondParagraph="NASA is responsible for some of humanity's greatest achievements, including the Apollo 11 mission which put the first humans on the Moon in 1969, the deployment of the Hubble and James Webb space telescopes, and landing multiple robotic rovers on Mars."
                  imageUrl={nasaLogo}
        />

        <ClickCounter/>
      </section>
    </>
  )
}

export default App
