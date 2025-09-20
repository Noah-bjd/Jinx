import { useState } from 'react';
import '../styles/contact.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="section-description">
            Have a project in mind or want to discuss potential collaboration? I'd love to hear from you.
          </p>
        </div>
        
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-form-label">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact-form-input" 
                  required
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email" className="contact-form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact-form-input" 
                  required
                />
              </div>
            </div>
            <div className="contact-form-group">
              <label htmlFor="message" className="contact-form-label">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows={5} 
                value={formData.message}
                onChange={handleChange}
                className="contact-form-textarea"
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-form-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}