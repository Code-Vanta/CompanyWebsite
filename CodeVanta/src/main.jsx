import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DarkIt from './component/DarkMode.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkIt>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DarkIt>
);
