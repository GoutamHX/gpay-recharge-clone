import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import RechargePage from './Components/RechargePage';
import Favicon from "react-favicon";

function App() {
  return (
    <div className="App">
        <Favicon url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyVO9LUWF81Ov6LZR50eDNu5rNFCpkn0LwYQ&s" />
     <title>GPay Diwali Recharge Offer</title>
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
