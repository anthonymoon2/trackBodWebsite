import React from 'react';

function PrivacyPolicy() {
  return (
    <main style={{ backgroundColor: '#151515', color: '#FFFFFF', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', marginTop: '50px' }}>Privacy Policy</h1>
      
      <p style={{ fontSize: '14px', color: '#888888' }}>Effective Date: January 1, 2025</p>
      <p>
        This Privacy Policy explains how we collect, use, and protect your personal data when you use the BodyMetrics mobile application ("App"). By using the App, you agree to the terms outlined here. If you do not agree, please refrain from using the App.
      </p>

      <hr style={{ borderColor: '#444444', margin: '20px 0' }} />

      <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>1. Data Collection</h2>
      <p>
        We collect personal data to provide a functional and personalized experience, including:
        <ul>
          <li>Account information (e.g., name, email).</li>
          <li>Photos uploaded for body analysis.</li>
          <li>Physical metrics (e.g., weight, height).</li>
          <li>Device and usage data (e.g. app activity).</li>
        </ul>
      </p>

      <hr style={{ borderColor: '#444444', margin: '20px 0' }} />

      <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>2. Data Usage</h2>
      <p>
        Your data is used to:
        <ul>
          <li>Provide accurate body composition analysis.</li>
          <li>Improve the App’s functionality and develop new features.</li>
          <li>Personalize user experience and offer insights tailored to your metrics.</li>
        </ul>
      </p>

      <hr style={{ borderColor: '#444444', margin: '20px 0' }} />

      <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>3. Non-Medical Advice Disclaimer</h2>
      <p>
        The analysis and information provided by the App are for informational purposes only. They are not intended to diagnose, treat, cure, or prevent any medical condition. Always consult a qualified healthcare provider for professional advice and concerns.
      </p>

      <hr style={{ borderColor: '#444444', margin: '20px 0' }} />

      <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>4. Data Security</h2>
      <p>
        Your data is encrypted during transmission and stored on secure servers. We implement access controls and regular security audits to protect your data. However, no method of storage or transmission is 100% secure. Users are responsible for safeguarding their account credentials.
      </p>

      <hr style={{ borderColor: '#444444', margin: '20px 0' }} />

      <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>5. User Rights</h2>
      <p>
        You have the following rights regarding your personal data:
        <ul>
          <li><b>Access:</b> Request a copy of the data we store about you.</li>
          <li><b>Correction:</b> Update any inaccuracies in your data.</li>
          <li><b>Deletion:</b> Request deletion of your personal data.</li>
          <li><b>Withdraw Consent:</b> Opt out of data collection and processing, though this may limit App functionality.</li>
        </ul>
      </p>

      <hr style={{ borderColor: '#444444', margin: '20px 0' }} />

      <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>6. Data Sharing</h2>
      <p>
        We do not sell your personal data. However, we may share it with third parties:
        <ul>
          <li>To comply with legal obligations or enforce our Terms and Conditions.</li>
          <li>To trusted service providers who assist in operating the App (e.g., cloud storage, analytics).</li>
        </ul>
        These providers are bound by confidentiality agreements and only process data as instructed.
      </p>

      <hr style={{ borderColor: '#444444', margin: '20px 0' }} />

      <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>7. Updates to Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in legal requirements or App functionality. The effective date at the top of this policy will indicate the most recent update. Continued use of the App indicates acceptance of the updated policy.
      </p>

      <hr style={{ borderColor: '#444444', margin: '20px 0' }} />

      <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>8. Contact</h2>
      <p>
        For privacy-related inquiries, contact us at <a href="mailto:trackbodapp@gmail.com" style={{ color: '#E1FF8A' }}>trackbodapp@gmail.com</a>.
      </p>
    </main>
  );
}

export default PrivacyPolicy;
