import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Home from './Components/Home';
import RechargePage from './Components/RechargePage';
function App() {
  return (
    <div className="App">     
        <Analytics />
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/recharge" element={<RechargePage />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
