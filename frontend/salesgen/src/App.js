import './App.css';
import SignInForm from './pages/LoginPage';
import SignUpForm from './pages/SignUpPage';
import { HashRouter as Router, Route, NavLink, BrowserRouter, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';


function App() {
  return (
    <BrowserRouter>
            <Routes>
              <Route path='/sign-in' element={<SignInForm/>}/>
              <Route path='/' element={<SignUpForm/>}/>
              <Route path='/home' element = {<HomePage/>}/>
            </Routes>

    </BrowserRouter>
  );
}

export default App;
