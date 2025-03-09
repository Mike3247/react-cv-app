import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from "./components/Greeting.jsx"
import GeneralInformation from './components/GeneralInformation.jsx'
import EducationalExperience from './components/EducationalExperience.jsx'
import PracticalExperience from './components/PracticalExperience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greeting />
    <GeneralInformation />
    <EducationalExperience />
    <PracticalExperience />
  </StrictMode>,
)
