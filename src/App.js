import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import RechargePage from './Components/RechargePage';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recharge" element={<RechargePage />} />
        </Routes>
        <SpeedInsights />
      </BrowserRouter>
    </div>
  );
}

export default App;
