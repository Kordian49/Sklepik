
import './App.css';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Register from './components/Register.js'
import Login from './components/Login.js'
import Main from './components/Main.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <div class="App">
      <header>
        <Navbar/>
      </header>
      <main className="Main-container d-flex flex-wrap justify-content-center align-content-md-around gap-3 p-3 fs-6 text-white ">
        <Router>
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/main" element={<Main/>}/>
          </Routes>
        </Router>



        


        
      </main>
      <footer className="d-flex align-items-center justify-content-center">
        <Footer/>
      </footer>
    </div>

  );
}

export default App;
