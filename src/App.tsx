import React, { createContext } from 'react';
import Layout from './components/layout/Layout';
import useDeviceWidth from "./hooks/useDeviceSize"
const context = createContext({
  isMobile: (window.innerWidth > 400) ? false : true,
})
function App() {
  let { isMobile } = useDeviceWidth();
  return (
    <context.Provider value={
      { isMobile }
    } >

      <div className="App">
        <Layout />
      </div>
    </context.Provider>
  );
}

export default App;
