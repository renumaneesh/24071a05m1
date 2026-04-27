import React from 'react';

function DoctorList() {
  const doctors = [
    { id: 1, name: 'Dr. Renu Maneesh', specialty: 'Cardiologist', experience: '15 Years', contact: 'renu@hms.com' },
    { id: 2, name: 'Dr. Rithwik', specialty: 'Neurologist', experience: '10 Years', contact: 'rithwik@hms.com' },
    { id: 3, name: 'Dr. Durga Naga Eswara', specialty: 'Pediatrician', experience: '8 Years', contact: 'durga@hms.com' },
  ];

  return (
    <div>
      <h2 className="page-title">Our Doctors</h2>
      <div className="grid">
        {doctors.map(doctor => (
          <div key={doctor.id} className="card">
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>{doctor.name}</h3>
            <div className="info-row">
              <span className="info-label">Specialty</span>
              <span className="info-value">{doctor.specialty}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Experience</span>
              <span className="info-value">{doctor.experience}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Contact</span>
              <span className="info-value">{doctor.contact}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
