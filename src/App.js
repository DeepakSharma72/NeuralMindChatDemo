import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Train from "./Train";
import Chat from "./Chat";
import Admin from "./Admin";

const iconCSS = {
  fontSize: '20px'
}

function App() {
  const [activeSection, setActiveSection] = useState(2);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  const [mobActiveSide, openMobActiveSidebar] = useState(false);


  return (
    <>
      <div className="row">
        <div className="col-md-10 col-12 order-sm-1 order-2">
          <i style={iconCSS} className="bi bi-box-arrow-in-left"></i>
          <hr></hr>
          {(windowWidth < 768) &&
           (mobActiveSide ? <i style={iconCSS} class="bi bi-x-circle" onClick={() => openMobActiveSidebar(false)}></i> 
           : <i style={iconCSS} class="bi bi-three-dots" onClick={() => openMobActiveSidebar(true)}></i>)}
          {
            activeSection === 1 && <Train />
          }
          {
            activeSection === 2 && <Chat />
          }
          {
            activeSection === 3 && <Admin />
          }
        </div>
        <Sidebar activeSection={activeSection} mobActiveSide={mobActiveSide} windowWidth={windowWidth} setActiveSection={setActiveSection} />
      </div>
    </>
  );
}

export default App;
