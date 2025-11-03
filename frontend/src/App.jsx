import './App.css'
import React,{useState} from 'react'
import ImageGenerator from './components/imageGenerator.jsx'
import Chat from './components/ChatComponent.jsx'
import RecipeGenerator from './components/recipeGenerator.jsx'
function App() {
const [activeTab, setActiveTab] = useState('image-generator');
const handleTabClick = (tab) => {
  setActiveTab(tab);
};
  return (
    <div className="App">
<button className={activeTab === 'image-generator' ? 'active' : ''}
onClick={() => handleTabClick('image-generator')}>Image generator</button>
<button className={activeTab === 'chat' ? 'active' : ''}
onClick={() => handleTabClick('chat')}>Ask AI</button>
<button className={activeTab === 'recipe-generator' ? 'active' : ''}
onClick={() => handleTabClick('recipe-generator')}>Recipe generator</button>
<div>

  {activeTab === 'image-generator' && (
    <div>
      <ImageGenerator />
    </div>
  )}
  {activeTab === 'chat' && (
    <div>
      <Chat />
    </div>
  )}
  {activeTab === 'recipe-generator' && (
    <div>
      <RecipeGenerator />
    </div>
  )}
</div>
    </div> 
  )
}

export default App
