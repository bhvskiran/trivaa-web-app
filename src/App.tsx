import React from "react";

import HomeScreen from "./components/HomeScreen.tsx";
import DreamTripCard from "./components/DreamTripCard.tsx";
import DreamTripUserForm from "./components/DreamTripUserForm.tsx";
import DreamAdventure from "./components/DreamAdventure.tsx";

const App: React.FC = () => {
  return (
    <div className="bg-orange-300 min-h-screen flex flex-col justify-center items-center pb-20">
      <HomeScreen />
      <DreamTripCard />
      <DreamTripUserForm />
      <DreamAdventure />
    </div>
  );
};

export default App;
