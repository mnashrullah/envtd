import React, { useEffect, useState } from "react";
import { Home } from "./app/pages";
function App() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return <div>{matches && <Home />}</div>;
}

export default App;
