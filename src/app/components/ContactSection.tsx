import '../styles/contact.css';

export default function ContactSection() {
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
          <form 
            className="contact-form"
            action="https://formsubmit.co/bouljihadnouhaila@gmail.com" 
            method="POST"
          >
            {/* Optional: Disable CAPTCHA */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Optional: Redirect to thank you page after submission */}
            <input type="hidden" name="_next" value="http://localhost:3000/Thanks" />

            <div className="contact-form-grid">
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-form-label">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
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
                className="contact-form-textarea"
                required
              ></textarea>
            </div>

            <button type="submit" className="mt-[1.2rem] contact-form-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
