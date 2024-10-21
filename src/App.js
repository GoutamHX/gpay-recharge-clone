import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import RechargePage from './Components/RechargePage';
import { SpeedInsights } from '@vercel/speed-insights/react';
function App() {
  return (
    <div className="App">     
     <title>GPay Diwali Recharge Offer</title>
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/recharge" element={<RechargePage />} />
        </Routes>
        <SpeedInsights />
        </BrowserRouter>
    </div>
  );
}

export default App;
