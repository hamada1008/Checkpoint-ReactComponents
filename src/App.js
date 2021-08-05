import React from "react";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
    
    
     <ProfilePhoto/>
     <div className="na">
     <FullName/>
     <Address/>
     </div>
    </div>
  );
}

export default App;
