import { Routes, Route } from 'react-router-dom';
import Intro from './page/Intro';
import RegisterPage from './page/Register';
import HomePage from './page/HomePage';
import Pokedex from './page/Pokedex';
import Gen1 from './page/Gen1';
import Gen2 from './page/Gen2';
import Gen3 from './page/Gen3';
import Gen4 from './page/Gen4';
import Gen5 from './page/Gen5';
import Gen6 from './page/Gen6';
import Gen7 from './page/Gen7';
import Gen8 from './page/Gen8';
import Gen9 from './page/Gen9';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/pokedex" element={<Pokedex />}>
        <Route path="gen1" element={<Gen1 />} />
        <Route path="gen2" element={<Gen2 />} />
        <Route path="gen3" element={<Gen3 />} />
        <Route path="gen4" element={<Gen4 />} />
        <Route path="gen5" element={<Gen5 />} />
        <Route path="gen6" element={<Gen6 />} />
        <Route path="gen7" element={<Gen7 />} />
        <Route path="gen8" element={<Gen8 />} />
        <Route path="gen9" element={<Gen9 />} />
      </Route>
    </Routes>
  );
}

export default App;
