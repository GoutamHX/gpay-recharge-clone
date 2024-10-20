import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import RechargePage from './Components/RechargePage';
import React, { Suspense } from 'react';

const SpeedInsights = React.lazy(() => import('@vercel/speed-insights/react').then(module => ({ default: module.SpeedInsights })));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recharge" element={<RechargePage />} />
        </Routes>
        <Suspense fallback={<div>Loading Speed Insights...</div>}>
          <SpeedInsights />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
