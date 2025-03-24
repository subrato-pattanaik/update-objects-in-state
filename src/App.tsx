import * as React from "react";
import { Deck, DefaultTemplate } from "spectacle";

import "./App.css";

const FirstSlide = React.lazy(() => import("./components/slides/Slide01"));
const SecondSlide = React.lazy(() => import("./components/slides/Slide02"));
const ThirdSlide = React.lazy(() => import("./components/slides/Slide03"));
const FourthSlide = React.lazy(() => import("./components/slides/Slide04"));
const FifthSlide = React.lazy(() => import("./components/slides/Slide05"));
const SixthSlide = React.lazy(() => import("./components/slides/Slide06"));
const SeventhSlide = React.lazy(() => import("./components/slides/Slide07"));
const EighthSlide = React.lazy(() => import("./components/slides/Slide08"));
const NinthSlide = React.lazy(() => import("./components/slides/Slide09"));
const ThankYou = React.lazy(() => import("./components/slides/ThankYou"));

function App() {
  return (
    <Deck template={() => <DefaultTemplate />}>
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <FourthSlide />
      <FifthSlide />
      <SixthSlide />
      <SeventhSlide />
      <EighthSlide />
      <NinthSlide />
      <ThankYou />
    </Deck>
  );
}

export default App;
