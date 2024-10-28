import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Homepage from './components/Homepage';  // Ensure this is correctly imported

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Uncomment these routes once they're ready */}
          {/* <Route path="/appointment" element={<AppointmentBooking />} /> */}
          {/* <Route path="/deleteappointment" element={<DeleteAppointment />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
