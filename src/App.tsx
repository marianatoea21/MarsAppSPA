import nasaLogo from './assets/nasa-logo-3.png'
import './App.css'
import NasaInfo from "./components/NasaInfo/NasaInfo.tsx";
import ClickCounter from "./components/ClickCounter/ClickCounter.tsx";
import Component1 from "./components/Component1/Component1.tsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CosmoExplorer from "./components/CosmoExplorer/CosmoExplorer.tsx";

function App() {
    let nasaTitle = "National Aeronautics and Space Administration"
    let firstParagraphForNasaInfo = "NASA was established in 1958 by President Dwight D. Eisenhower in response to the Soviet Union's launch of the Sputnik satellite, aiming to ensure that US space exploration was peaceful and civilian-led.";
    let secondParagraphForNasaInfo = "NASA is responsible for some of humanity's greatest achievements, including the Apollo 11 mission which put the first humans on the Moon in 1969, the deployment of the Hubble and James Webb space telescopes, and landing multiple robotic rovers on Mars.";
  return (
    <BrowserRouter>
        <nav>
            <Link to="/about">About Nasa</Link> | {" "}
            <Link to="/clicker">Click Button</Link> | {" "}
            <Link to="/cool-clicker">Cool Click Button</Link> | {" "}
            <Link to="/cosmo-explorer">Cosmo Explorer</Link>
        </nav>

        <Routes>
            <Route path="/about" element={
                <NasaInfo title={nasaTitle}
                          firstParagraph= {firstParagraphForNasaInfo}
                          secondParagraph={secondParagraphForNasaInfo}
                          imageUrl={nasaLogo}
                />}
            />

            <Route path="/clicker" element={
                <Component1 />
            }
            />

            <Route path="/cool-clicker" element={
                <ClickCounter />
            }
            />

            <Route path="/cosmo-explorer" element={
                <CosmoExplorer />
            }
            />
        </Routes>
    </BrowserRouter>
  )
}

export default App
