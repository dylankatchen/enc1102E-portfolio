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
      <section className="w-full flex justify-center items-center h-full">
        <div className=" w-[90%] font-sans flex flex-col pt-5 pb-5 h-full">
          <h1
            className="text-5xl pl-4 pb-5 font-bold underline bg-clip-text text-transparent"
            style={{
              backgroundImage: "url('/blurry-gradient-haikei.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            Path of Revision
          </h1>
          <div className='w-full min-h-[500px] h-1/2 bg-gray-800 rounded-4xl text-white'>
            <h2 className='mx-auto font-bold text-2xl text-center py-4'>Research Paper</h2>
            <div className='flex flex-row items-center justify-evenly gap-5 w-full h-full'>
              <div className='w-[200px] h-[350px] bg-blue-500 '> hello</div>
              <div className='w-[200px] h-[350px] bg-blue-500'>hello</div>
              <div className='w-[200px] h-[350px] bg-blue-500'>hello</div>
            </div>
            <h3>Reflection</h3>
            <p>gvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb bgvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb b ygvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb b ygvhbnjutfygvbouhybo oybuiy uyb ybiu uy iuyviuybuiy iuybu iuybuy iuyb b y y</p>
          </div>
        </div>
      </section>

      {/* Blob Animation Section */}
      <section>
      </section>
    </div>
  );
}

export default App;