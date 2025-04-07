import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Promotion from './components/index.jsx'
import HeaderComponent from './components/nav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderComponent />
    <Promotion />
  </StrictMode>,
)
