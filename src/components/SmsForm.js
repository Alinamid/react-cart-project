import React from "react";

const SMSForm = () => (
  <div className="container mt-4">
    <h1 className="text-center mb-4">SMS Gateway</h1>
    <form id="smsForm">
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          className="form-control"
          id="phoneNumber"
          name="phoneNumber"
          required
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={sendSMS}>
        Send SMS
      </button>
    </form>
  </div>
);

function sendSMS() {
  const phoneNumber = document.getElementById("phoneNumber").value;
  // Implement your logic to send SMS
  alert(`Sending SMS to ${phoneNumber}`);
}

export default SMSForm;
