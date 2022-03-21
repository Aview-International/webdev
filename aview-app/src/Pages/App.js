
// import '../Styles/App.css';
import Landing from "./Landing.js";
import AboutPage from "./AboutPage.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;