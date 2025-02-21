import React from 'react';

function Home() {
  return (
    <main style={{ 
      backgroundColor: '#151515', 
      color: '#FFFFFF', 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif', 
      textAlign: 'center' 
    }}>

      {/* Logo + Title */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', marginTop: '60px'}}>
        <img
          src="images/logo.png"
          alt="Logo"
          style={{ height: '40px', marginRight: '10px' }}
        />
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
          trackBod
        </h1>
      </div>


      <p class="custom-text">Instant <span class="highlight">AI Body Composition</span></p>

      <div data-tilt>
        <img 
          src="images/phone.png" 
          alt="Phone" 
          style={{ width: '400px', maxWidth: '100%', display: 'block', margin: '0 auto' }} 
        />
      </div>

      <img 
          src="images/appstore.png" 
          style={{ width: '200px', maxWidth: '100%', display: 'block', margin: '0 auto' }} 
        />
    </main>
  );
}

export default Home;
