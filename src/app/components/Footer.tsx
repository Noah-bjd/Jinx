import './../styles/footer.css'
export default function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-copyright">
              © {new Date().getFullYear()} React Developer Portfolio. All rights reserved.
            </p>
            <div className="footer-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Resume</a>
              <a href="#" className="footer-link">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }