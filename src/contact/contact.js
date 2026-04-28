import React, { useState } from "react";
import "../Style/contact.css";
import API_BASE_URL from "../config";

import mailicon from "../Images/mailicon.png"
import phoneicon from "../Images/phoneicon.png"

const Contact = () => {
  const [formData, setFormData] = useState({
    service: "",
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > 200) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Map frontend fields to backend fields
    const payload = {
      service: formData.service,
      full_name: formData.fullName,
      email: formData.email,
      phone_number: formData.phone,
      message: formData.message,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/submit/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          service: "",
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setError(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please make sure the backend is running.");
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page-container">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-grid">
        {/* Left Column */}
        <div className="contact-info-box">
          <p>
            We're here to help with your flooring needs. Whether you have questions 
            or a project in mind, feel free to contact us.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <span className="method-icon">
                <img src={mailicon} alt="mailicon" width="20" height="20" />
              </span>

              <p>mmlconstruction61@gmail.com</p>
            </div>
            <div className="contact-method">
              <span className="method-icon">
                <img src={phoneicon} alt="phoneicon" width="20" height="20" />
              </span>
              <p>+91 86100 13355</p>
            </div>
          </div>

          <div className="address-section">
            <h3>Our Address</h3>
            <p>
              #7 Krapangavanayagar koil Street,<br />
              Kannadapalayam, Chennai - 600123
            </p>
          </div>
        </div>

        {/* Right Column */}
        <form className="contact-form-side" onSubmit={handleSubmit}>
          {error && <div className="error-message" style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
          
          <div className="form-field">
            <label>Service</label>
            <select 
              name="service" 
              value={formData.service} 
              onChange={handleChange}
              required
            >
              <option value="" disabled>Service</option>
              <option value="flooring">Flooring</option>
              <option value="construction">Construction</option>
              <option value="consultation">Consultation</option>
            </select>
          </div>

          <div className="form-field">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label>Phone Number</label>
            <div className="phone-input-group">
              <div className="country-code">91+</div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <p className="char-counter">{formData.message.length}/200 Characters</p>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

