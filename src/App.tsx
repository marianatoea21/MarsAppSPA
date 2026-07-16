import nasaLogo from './assets/nasa-logo-3.png'
import './App.css'
import NasaInfo from "./components/NasaInfo/NasaInfo.tsx";
import ClickCounter from "./components/ClickCounter/ClickCounter.tsx";
import Component1 from "./components/Component1/Component1.tsx";

function App() {
    let nasaTitle = "National Aeronautics and Space Administration"
    let firstParagraphForNasaInfo = "NASA was established in 1958 by President Dwight D. Eisenhower in response to the Soviet Union's launch of the Sputnik satellite, aiming to ensure that US space exploration was peaceful and civilian-led.";
    let secondParagraphForNasaInfo = "NASA is responsible for some of humanity's greatest achievements, including the Apollo 11 mission which put the first humans on the Moon in 1969, the deployment of the Hubble and James Webb space telescopes, and landing multiple robotic rovers on Mars.";
  return (
    <>
      <section id="center">
        <NasaInfo title={nasaTitle}
                  firstParagraph= {firstParagraphForNasaInfo}
                  secondParagraph={secondParagraphForNasaInfo}
                  imageUrl={nasaLogo}
        />

        <ClickCounter/>
        <Component1/>
      </section>
    </>
  )
}

export default App
