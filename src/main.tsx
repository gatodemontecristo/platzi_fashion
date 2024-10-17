import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts/loadFonts.css';
import 'animate.css/animate.min.css';
import { FashionApp } from './FashionApp';
import 'notyf/notyf.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FashionApp />
  </React.StrictMode>,
);
