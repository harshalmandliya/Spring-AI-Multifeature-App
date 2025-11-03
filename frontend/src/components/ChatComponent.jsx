import React from "react";
function Chat(){
  const [prompt, setPrompt] = React.useState('');
  const [chatResponse, setChatResponse] = React.useState('');
  const askAI = async () => {
    try{
      const response = await fetch(`http://localhost:8080/ask-ai?prompt=${prompt}`);
      const data = await response.text();
      setChatResponse(data);
    }
    catch(error){
      console.error('Error asking AI:', error);
    }
  };

  return (
    <div>
      <h2>Talk to AI</h2>
      <input type="text" placeholder="Enter a prompt for AI" value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
    <button onClick={askAI}>Ask AI</button>
    <div className="output"><p>{chatResponse}</p></div>
    </div>
  );
}

export default Chat;
