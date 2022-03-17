import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col,Row, Button,Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Nav from './Nav.js'
import UserForm from './UserForm.js'
import Userdata from './Userdata.js'
import Useredit from './Useredit.js'
import firebaseDB from './firebase';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  return (

    <Container>
      <div>
        <Router>

        <Nav />
          <Routes>
            <Route path="/form" element={<UserForm />} />
            <Route path="/edit/:id" element={<Useredit />} />
            <Route path="/" element={<Userdata />} />
          </Routes>
        </Router>
      </div>
    </Container>
  );
}

export default App;
