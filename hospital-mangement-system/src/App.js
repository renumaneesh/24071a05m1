import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './login';
import Registration from './registration';
import PatientDetails from './patientdetails';
import DoctorList from './doctorlist';
import AppointmentBooking from './appointmentbooking';
import Contact from './contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/" className="nav-brand">HMS Portal</Link>
          <div className="nav-links">
            <Link to="/patient-details" className="nav-link">Patients</Link>
            <Link to="/doctors" className="nav-link">Doctors</Link>
            <Link to="/book-appointment" className="nav-link">Appointments</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/patient-details" element={<PatientDetails />} />
            <Route path="/doctors" element={<DoctorList />} />
            <Route path="/book-appointment" element={<AppointmentBooking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          24071A05M1 || THURUPATI RENU MANEESH
        </footer>
      </div>
    </Router>
  );
}

export default App;
