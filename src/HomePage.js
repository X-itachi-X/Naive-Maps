// HomePage.js
import React from 'react';

function HomePage() {
  return (
    <div>
      {window.location.pathname === '/' ? (
        <h1>Welcome to the Home Page</h1>
      ) : (
        <h2>Welcome to the Home Page</h2>
      )}
    </div>
  );
}

export default HomePage;
