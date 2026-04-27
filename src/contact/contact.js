import React, { useState } from "react";
import "../Style/contact.css";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > 200) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Message sent successfully!");
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

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

