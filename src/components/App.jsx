import React, { useState } from "react";
 

function App() {
  let date = new Date().toLocaleTimeString();
  
  const [time, setUp] = useState(date);

  function updateTime (){
    let date = new Date().toLocaleTimeString();

    setUp(date)
    
  }
  
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime} >Get Time</button>
    </div>
  );
}

export default App;
