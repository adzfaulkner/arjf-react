import React from 'react';
import Modal from '../Modal';

const Footer = () => (
  <div className="footer">
    <p>&copy; ARJF Web Developer {new Date().getFullYear()}</p>
    <a href="https://github.com/adzfaulkner" className="githubRepo" target="_blank" rel="noopener noreferrer" />
    <Modal/>
  </div>
);

export default Footer;