import React, {useState} from 'react';
import AddVenture from './AddVenture';
import './App.css';
import ActivityList from "./Activity";
import WardrobeList from "./Wardrobe";


function App() {

  return (
      <div className="App">
        <header className="App-header">
          <h1>LEGO Showcase</h1>
          <AddVenture
              name="Botanical Collection - Flowers"
              description="Create a beautiful flower display that will stay fresh all year round with this LEGO Botanical Collection."
              imageUrl="https://www.lego.com/cdn/cs/set/assets/blteb6d782e63fd9de2/10280_Block_Standard_3.jpg?fit=crop&format=jpg&quality=80&width=635&height=440&dpr=1"
          />
          <ActivityList

          />
          <WardrobeList

          />
        </header>
      </div>
  );
}

function AddAdventureForm() {
    const [adventure, setAdventure] = useState([]);
    const addEntryClick = () => {
        setAdventure(oldArray => [...oldArray, `Entry ${oldArray.length}`]);
    };
};

function AddWardrobeForm() {
    const [wardrobe, setWardrobe] = useState([]);
};

export default App;