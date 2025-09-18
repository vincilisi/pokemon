import { Routes, Route } from 'react-router-dom';
import Intro from './page/Intro';
import RegisterPage from './page/Register';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
