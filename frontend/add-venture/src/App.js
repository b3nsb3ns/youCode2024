import React, {useState} from 'react';
import AddVenture from './AddVenture';
import './App.css';
import ActivityList from "./Activity";
import WardrobeList from "./Wardrobe";


function App() {

  return (
      <div className="App">
        <header className="App-header">
          <h1>Adventure App</h1>
          <AddVenture
              name="Challenge of the week:"
              description="5-10km run, up to 1h length"
              imageUrl="https://pbs.twimg.com/media/BUIghUqCQAEqMsa.jpg:large"
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