import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
          <ErrorBoundary fallback={<p>Hyperdrive Failure. Tap F5 Chewie!</p>}>
    <App />
    </ErrorBoundary>
  </React.StrictMode>
);
