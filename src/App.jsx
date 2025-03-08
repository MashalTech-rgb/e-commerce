// App.jsx
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Your main content goes here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;