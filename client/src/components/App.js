import Login from "./login";
import React, {useState} from "react";
import useLocalStorage from '../hooks/useLocalStorage'
import DashBoard from "./DashBoard";
import {ContextProvider} from "../contexts/ContextProvider";
import {ConversationProvider} from "../contexts/ConversationProvider";

function App() {
  const [Id,setid]=useLocalStorage('id')
  
  const dashbord=(
 
    <ContextProvider>
    <ConversationProvider id={Id}>
      <DashBoard Id={Id}/>
      </ConversationProvider>
    </ContextProvider>
    
  )
  return (
    
      <>
      
     
      {Id?dashbord:<Login onIDsubmit={setid}/>}
       
        </>
     
        
      
  );
}

export default App;
