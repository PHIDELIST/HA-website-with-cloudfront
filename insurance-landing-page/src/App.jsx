import react from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { Routes, Route , BrowserRouter } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() { 

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/Account" element={<LoginPage />} />
    <Route path="/Register" element={<SignUpPage />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>

      )}

export default App;
