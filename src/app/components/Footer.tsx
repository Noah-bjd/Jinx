import './../styles/footer.css'
export default function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Noah's Portfolio. Feel free to connect!
            </p>
            <div className="footer-links">
              <a  href="https://www.linkedin.com/in/nouhaila-bouljihad-255b36234/" className="footer-link">Linkedin</a>
              <a href="https://github.com/Noah-bjd" className="footer-link">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }