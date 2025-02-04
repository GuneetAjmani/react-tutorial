import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 flex 
      justify-center items-center"
      style={{ backgroundColor: color }}
    >
      {/* Color Picker Buttons */}
      <div className="fixed flex flex-wrap justify-center 
      bottom-12 inset-x-0 px-2">
        <div className="flex space-x-3 bg-white p-3 
        rounded-xl shadow-md">
          {["red", "blue", "green", "yellow", "pink",
           "purple", "black"].map(
            (clr) => (
              <button
                key={clr}
                className="px-4 py-2 text-white rounded-lg"
                style={{ backgroundColor: clr }}
                onClick={() => setColor(clr)}
              >
                {clr}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

