import React from 'react';

function PrivacyPolicy() {
  return (
    <main style={{ backgroundColor: '#151515', color: '#FFFFFF', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', marginTop: '50px' }}>Privacy Policy</h1>
      
      <p style={{ fontSize: '14px', color: '#888888' }}>Effective Date: January 1, 2025</p>
      <p>
        This Privacy Policy explains how we collect, use, and protect your personal data when you use the BodyMetrics mobile application ("App").
      </p>

      <hr style={{ borderColor: '#444444', margin: '20px 0' }} />

      <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>1. Data Collection</h2>
      <p>
        We collect personal data, including but not limited to:
        <ul>
          <li>Account information (e.g., name, email).</li>
          <li>Photos uploaded for body analysis.</li>
          <li>Physical metrics (e.g., weight, height).</li>
          <li>Device and usage data (e.g., IP address, app activity).</li>
        </ul>
      </p>

      <hr style={{ borderColor: '#444444', margin: '20px 0' }} />

      <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>2. Data Usage</h2>
      <p>
        We use your data to:
        <ul>
          <li>Provide and improve the App’s functionality.</li>
          <li>Generate personalized body composition analysis.</li>
          <li>Enhance user experience and develop new features.</li>
        </ul>
      </p>

      <hr style={{ borderColor: '#444444', margin: '20px 0' }} />

      <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>3. Data Security</h2>
      <p>
        Your data is encrypted during transmission and stored on secure servers. We implement access controls and regular security audits to protect your data. However, no method of storage or transmission is 100% secure.
      </p>

      <hr style={{ borderColor: '#444444', margin: '20px 0' }} />

      <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>4. User Rights</h2>
      <p>
        You have the right to:
        <ul>
          <li>Access your data.</li>
          <li>Request data deletion.</li>
          <li>Withdraw consent to data processing.</li>
        </ul>
      </p>

      <hr style={{ borderColor: '#444444', margin: '20px 0' }} />

      <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>5. Contact</h2>
      <p>
        For privacy-related inquiries, contact us at <a href="mailto:privacy@bodymetricsapp.com" style={{ color: '#E1FF8A' }}>privacy@bodymetricsapp.com</a>.
      </p>
    </main>
  );
}

export default PrivacyPolicy;
