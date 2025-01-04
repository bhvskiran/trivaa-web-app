import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-orange-300 min-h-screen flex flex-col justify-center items-center pb-20">
      <div className="bg-blue-950 h-[75vh] w-4/5">
        <Navbar />
      </div>

      <div className="bg-blue-950 h-[90vh] w-4/5 mt-32"></div>
    </div>
  );
}

export default App;
