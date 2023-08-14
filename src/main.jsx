import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/index.css"
import ThemeContext from "./pages/context/ThemeContext.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContext.Provider value={"success"}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>
)
