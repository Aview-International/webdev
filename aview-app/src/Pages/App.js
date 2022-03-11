
// import '../Styles/App.css';
import Landing from "./Landing";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Landing/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;