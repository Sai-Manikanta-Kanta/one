import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landingPage';
import PostsPage from './components/postsPage';
import CamPage from "./components/CamPage";


function App() {
  return (
    <div className="App">
  
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          </Route>
          <Route path="/postspage" element={<PostsPage />}>
          </Route>
          <Route path="/camPage" element={<CamPage />}>
          </Route>
          
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
