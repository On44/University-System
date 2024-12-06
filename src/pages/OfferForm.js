import React, { useState } from 'react';

function OfferForm() {
  const [applicationRef, setApplicationRef] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/offer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationRef }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(`Letter of Offer generated for ${data.applicant.name}`);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('An error occurred.');
    }
  };

  return (
    <div>
      <h2>Generate Offer Letter</h2>
      
      {/* Table with Descriptions */}
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>Action</th>
            <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>Application Ref. No.</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
            <i>Ref No. or<br/>
Index No / Exam Year<br/>
The year of registration must be in full eg 01234567001/2015</i>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Form to Generate Offer Letter */}
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: '10px' }}>
          <label>Application Ref. No.:</label>
          <input
            type="text"
            value={applicationRef}
            onChange={(e) => setApplicationRef(e.target.value)}
            required
            style={{ padding: '8px', width: '100%' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4F46E5', color: '#fff', border: 'none', cursor: 'pointer' }}>Generate Letter of Offer</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default OfferForm;
