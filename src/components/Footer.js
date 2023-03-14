import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import '../css/footer.css'; // Footer CSS 추가

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p><FaPhone /> Phone: 010-2763-5943</p>
                <p><FaEnvelope /> Email: 32194579@dankook.ac.kr</p>
                <a
                    href="https://github.com/minseoky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                >
                    <FontAwesomeIcon icon={faGithub} className="footer__icon" />
                    GitHub
                </a>
            </div>
        </footer>
    );
}

export default Footer;
