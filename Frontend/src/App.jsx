import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; 
import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PartOne from './Pages/PartOne';
import { PrimeReactProvider } from 'primereact/api';

function App() {
  return (
    <PrimeReactProvider>

    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/partone" element={<PartOne />} />

        </Routes>
      </>
    </Router></PrimeReactProvider>
  );
}

export default App;
