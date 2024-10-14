import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="container">
      <h1 className="text-center mb-6">Contact Us</h1>
      <p>Reach out to us if you have any questions or feedback.</p>

      <div className="company-details">
        <h2>Company Details</h2>
        <p><strong>Company Name:</strong> Feast-Find</p>
        <p><strong>Email:</strong> feastfind@mail.to</p>
        <p><strong>Mobile:</strong> +91 XXXXXXXXXX</p>
        <p><strong>Address:</strong> Hyderabad, Telangana, India</p>
      </div>

      <div className="google-maps">
        <h2>Google Maps Location</h2>
        <iframe
          title="CyHub Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.822814008829!2d78.45636!3d17.41262799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99b20849974d%3A0xf94a92c67c222747!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1644661944374!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
