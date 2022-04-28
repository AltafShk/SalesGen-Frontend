import './App.css';
import SignInForm from './pages/LoginPage';
import SignUpForm from './pages/SignUpPage';
import { HashRouter as Router, Route, NavLink, BrowserRouter, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import GenDescPage from './pages/GenDescPage';


function App() {
  return (
    <BrowserRouter>
            <Routes>
              <Route path='/sign-in' element={<SignInForm/>}/>
              <Route path='/' element={<SignUpForm/>}/>
              <Route path='/home' element = {<HomePage/>}/>
              <Route path = '/generate' element = {<GenDescPage/>}/>
            </Routes>

    </BrowserRouter>
  );
}

export default App;
