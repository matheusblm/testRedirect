import "./App.css";
import { useEffect } from "react";
import { isMobile, isIOS } from "react-device-detect";

function App() {
  const storeName = new URLSearchParams(window.location.search).get("store");
  useEffect(() => {
    if (isMobile) {
      // Redirect to the app store for mobile devices
      if (storeName) {
        window.location.href = isIOS
          ? `docgsx://root/petshop/${storeName}`
          : `docgsx://root/petshop/${storeName}`;
      } else {
        // Redirect to the home page if store name is not provided
        window.location.href = "docgsx://";
      }
    }
  }, []);

  return (
    <div>
      <div>
        <p>Welcome to our desktop website!</p>
        <p>Please download our app:</p>
        <a href="market://details?id=com.docgsx">Download on Android</a>
        <a href="itms-apps://apps.apple.com/tr/app/docgx/id1530582505">
          Download on iOS
        </a>
      </div>
      {storeName && storeName}
    </div>
  );
}

export default App;
