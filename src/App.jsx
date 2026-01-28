// App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import {Form} from './Components/Form';
import Footer from './Components/Footer';
import {Background} from './Components/Background';

const App = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20 pb-10 sm:pt-0 sm:pb-0">
      <Background />
      <Navbar /> {/* Contains the Logo */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4">
        <Hero />
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default App;