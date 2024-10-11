import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
import DetailPage from './components/detailpage/detailpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;