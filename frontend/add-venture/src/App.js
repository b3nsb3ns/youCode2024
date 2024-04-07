import React, {useState} from 'react';
import AddVenture from './AddVenture';
import './App.css';
import ActivityList from "./Activity";
import WardrobeList from "./Wardrobe";

function App() {
  let arcLogo = 'https://s3-alpha-sig.figma.com/img/8e8a/ec6e/57876d7ee1377a9a6be43ce0af15471c?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eOVaCT1nQ4THKShn8iCFXeeddTd1B4v3NoVEc2ZZnOPRCEnS6xmKb8Lm4h0SdIq~PFYT3slK3rKWf9VdEhEsYauDKxs9s7TMaNbi3wsL6itffhvAg7pbqjmlTOQA1jeeLIkWei7KfVQauqjp-8wmHCeGM3FjqosSB-VkL8pggrL1Kq2Fd8W7l4P3y2sl64IKFAZ9EQ7-k4Xn26ABzfScveXWvo9Uy5KJKT1qemHxmH9hlYMrImB1xIhvlC~jQDcpqcFZcjwT5s6~SL9Bgfk-YYUsYdwCXGMK8vt0F7x1yEhXQHe6xg~EN1ryIzSIlYmPBoyKZabyY5WPY4fDTrPIMQ__'

  return (
      <div className="App">
        <header className="App-header">
        <img className='logo' src={arcLogo}></img>
        <AddVenture
            name="Challenge of the week:"
            description="5-10km run, up to 1h length"
            imageUrl="https://pbs.twimg.com/media/BUIghUqCQAEqMsa.jpg:large"
        />
        <ActivityList/>
        <WardrobeList/>
        </header>
      </div>
  );
}



export default App;