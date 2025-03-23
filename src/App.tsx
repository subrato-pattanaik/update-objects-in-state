import * as React from "react";
import { Deck, DefaultTemplate } from "spectacle";

import "./App.css";

const FirstSlide = React.lazy(() => import("./components/slides/Slide01"));
const SecondSlide = React.lazy(() => import("./components/slides/Slide02"));
const ThirdSlide = React.lazy(() => import("./components/slides/Slide03"));
const FourthSlide = React.lazy(() => import("./components/slides/Slide04"));

function App() {
  return (
    <Deck template={() => <DefaultTemplate />}>
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <FourthSlide />
    </Deck>
  );
}

export default App;
