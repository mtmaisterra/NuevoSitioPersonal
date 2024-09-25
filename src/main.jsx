import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
