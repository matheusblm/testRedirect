import "./App.css";
import { useEffect } from "react";
import { isMobile, isIOS } from "react-device-detect";
function App() {
  useEffect(() => {
    if (isMobile) {
      // Redirect to the app store for mobile devices
      window.location.href = isIOS ? `docgx://` : `docgsx://`;
    }
  }, []);

  return (
    <div>
      <p>Welcome to our desktop website!</p>
    </div>
  );
}

export default App;
