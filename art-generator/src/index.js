import React from 'react';
import './index.css';
import App from './App';
import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'



createRoot(document.getElementById('root')).render(
  <Suspense fallback={null}>
    <App />
  </Suspense>
)