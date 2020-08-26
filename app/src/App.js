import React from "react";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ComponentThree from "./components/ComponentThree";
import Trails from "./components/Trails";
import MouseParallax from "./components/MouseParallax";
import KeyFrames from "./components/KeyFrames";
import ImageFade from "./components/ImageFade";

const style = {
  spacing: {
    padding: "20px",
  },
};

function App() {
  return (
    <div className="App">
      <ComponentOne />
      <ImageFade />
      <ComponentTwo />
      <Trails />
      <ComponentThree />
      <MouseParallax />
      <KeyFrames />
    </div>
  );
}

export default App;
