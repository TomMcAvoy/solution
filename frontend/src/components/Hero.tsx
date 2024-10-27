import React from 'react';
import styles from '../styles/Hero.module.css'; // Assuming you have a CSS module for styling

const Hero: React.FC = () => {
  return (
    <section className={styles.iamSection}>
      <div className={styles.container}>
        <h1>Identity and Access Management</h1>
        <p>
          At [Whitestart System Security ], we specialize in providing best-of-breed Identity and Access Management (IAM) solutions. Our team of expert consultants is dedicated to helping organizations secure their digital assets and ensure compliance with industry standards.
        </p>
        <h2>Our Services</h2>
        <ul>
          <li>Identity Governance and Administration</li>
          <li>Access Management</li>
          <li>Privileged Access Management</li>
          <li>Single Sign-On (SSO) Solutions</li>
          <li>Multi-Factor Authentication (MFA)</li>
          <li>Directory Services</li>
          <li>Cloud Identity Solutions</li>
        </ul>
        <h2>Why Choose Us?</h2>
        <p>
          Our IAM consultants bring years of experience and a deep understanding of the latest technologies and best practices. We work closely with our clients to design and implement customized IAM solutions that meet their unique needs.
        </p>
        <ul>
          <li>Expertise in leading IAM technologies</li>
          <li>Proven track record of successful implementations</li>
          <li>Comprehensive approach to security and compliance</li>
          <li>Dedicated support and maintenance services</li>
        </ul>
        <h2>Contact Us</h2>
        <p>
          Ready to enhance your organization's security with our IAM solutions? Contact us today to learn more about how we can help you achieve your security goals.
        </p>
      </div>
    </section>
  );
};

export default Hero;