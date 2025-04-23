import './index.css';
import KUTE from 'kute.js';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    try {
      // Initialize Kute.js morph animation
      const tween = KUTE.fromTo(
        '#path1', // Starting path
        '#path2', // Target path
        { path: '#path1' },
        { path: '#path2' },
        { repeat: 999, duration: 3000, yoyo: true } // Infinite animation
      );
      tween.start();
      console.log('KUTE.js animation started successfully');
    } catch (error) {
      console.error('Error initializing KUTE.js animation:', error);
    }
  }, []);

  return (
    <div className= 'bg-gray-100 min-h-screen'>
      {/* Header */}
      <section className="w-full flex flex-col items-center justify-center bg-gray-800 rounded-b-4xl">
        <div
          className="w-[90%] text-white font-sans flex flex-row items-center justify-between py-7 bg-cover bg-center"
          style={{ backgroundImage: "url('/blurry-gradient-haikei.svg')" }}
        >
          <h2 className="text-2xl font-bold pl-4">ePortfolio</h2>
          <div className="flex flex-row items-center justify-center gap-5 pr-5">
          <a className='font-bold'>Home</a>
          <a className='font-bold'>Outcomes</a>
          <a>outcome 1</a>
          <a>outcome 1</a>
          <a>outcome 1</a>
          <a>outcome 1</a>
          <a>outcome 1</a>
          <a>outcome 1</a>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="w-full flex justify-center items-center">
        <div className=" w-[90%] font-sans flex flex-col py-10">
          <h1
            className="text-3xl pl-4 font-bold underline bg-clip-text text-transparent"
            style={{
              backgroundImage: "url('/blurry-gradient-haikei.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            Path of Revision
          </h1>
        </div>
      </section>

      {/* Blob Animation Section */}
      <section>
      </section>
    </div>
  );
}

export default App;