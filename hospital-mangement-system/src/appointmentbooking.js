import React, { useState } from 'react';

function AppointmentBooking() {
  const [formData, setFormData] = useState({
    name: '',
    doctor: '',
    date: '',
    time: ''
  });
  const [bookedDetails, setBookedDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookedDetails({ ...formData });
    setFormData({ name: '', doctor: '', date: '', time: '' });
  };

  return (
    <div className="auth-container" style={{ maxWidth: '600px' }}>
      <div className="card">
        <h2 className="page-title">Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Patient Name</label>
            <input 
              type="text" 
              className="form-input" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Select Doctor</label>
            <select 
              className="form-input" 
              required 
              value={formData.doctor}
              onChange={(e) => setFormData({...formData, doctor: e.target.value})}
            >
              <option value="">-- Choose a Doctor --</option>
              <option value="Dr. Renu Maneesh">Dr. Renu Maneesh (Cardiologist)</option>
              <option value="Dr. Rithwik">Dr. Rithwik (Neurologist)</option>
              <option value="Dr. Durga Naga Eswara">Dr. Durga Naga Eswara (Pediatrician)</option>
            </select>
          </div>
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Date</label>
              <input 
                type="date" 
                className="form-input" 
                required 
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Time</label>
              <input 
                type="time" 
                className="form-input" 
                required 
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Confirm Booking</button>
        </form>
      </div>

      {bookedDetails && (
        <div className="card" style={{ marginTop: '2rem', borderTop: '4px solid var(--primary)' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Appointment Confirmed!</h3>
          <div className="info-row">
            <span className="info-label">Patient Name</span>
            <span className="info-value">{bookedDetails.name}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Doctor</span>
            <span className="info-value">{bookedDetails.doctor}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Date</span>
            <span className="info-value">{bookedDetails.date}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Time</span>
            <span className="info-value">{bookedDetails.time}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppointmentBooking;