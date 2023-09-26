import React from "react";
import "./footer.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";

function footer() {
  return (
    <footer className="footer">
      <div className="container">
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.linkedin.com/in/malvinopondo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Linkedin} alt="linkedin" className="link" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Malvino-creator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Github} alt="github" className="link" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100008794330133"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={FacebookIcon} alt="facebook" className="link" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Malvin_Opondo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={TwitterIcon} alt="twitter" className="link" />
                </a>
              </li>
              <div className="footer-p">
            <p>&copy; 2023 Malvin Opondo. All Rights reserved.</p>
          </div>
            </ul>
        </div>
    </footer>
  );
}

export default footer;
