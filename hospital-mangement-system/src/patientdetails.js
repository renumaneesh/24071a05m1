import React from 'react';

function PatientDetails() {
  const patients = [
    { id: 1, name: 'Prabhas', age: 45, diagnosis: 'Hypertension', status: 'Admitted' },
    { id: 2, name: 'Nani', age: 32, diagnosis: 'Asthma', status: 'Discharged' },
    { id: 3, name: 'NTR', age: 58, diagnosis: 'Diabetes', status: 'Admitted' },
  ];

  return (
    <div>
      <h2 className="page-title">Patient Details</h2>
      <div className="grid">
        {patients.map(patient => (
          <div key={patient.id} className="card">
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>{patient.name}</h3>
            <div className="info-row">
              <span className="info-label">Age</span>
              <span className="info-value">{patient.age}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Diagnosis</span>
              <span className="info-value">{patient.diagnosis}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Status</span>
              <span className="info-value" style={{
                color: patient.status === 'Admitted' ? '#eab308' : '#22c55e'
              }}>
                {patient.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientDetails;
