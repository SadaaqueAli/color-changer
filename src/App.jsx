import { useState } from 'react';
import './index.css';

export default function App() {
  const colors = ["red", "blue", "yellow", "green", "purple", "orange", "pink", "teal", "maroon", "olive"];
  const [colorIndex, setColorIndex] = useState(0);


  const handleColorChange = () => {
    const nextIndex = (colorIndex + 1) % colors.length;
    setColorIndex(nextIndex);
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center duration-200" style={{ backgroundColor: colors[colorIndex] }}>
        <div className="shadow-lg bg-white px-3 py-2 rounded-full">
          <button 
            onClick={handleColorChange} 
            className="outline-none px-10 py-4 rounded-full text-black" 
            style={{ backgroundColor: colors[colorIndex] }}
          >
            {colors[colorIndex].charAt(0).toUpperCase() + colors[colorIndex].slice(1)}
          </button>
        </div>
      </div>
    </>
  );
}
