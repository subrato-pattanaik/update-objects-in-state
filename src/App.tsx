import {
  Deck,
  DefaultTemplate,
  FlexBox,
  Heading,
  Slide,
  SpectacleLogo,
} from "spectacle";

import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <Deck template={() => <DefaultTemplate />}>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <a
            href="https://react.dev/learn/updating-objects-in-state"
            target="_blank"
          >
            <img
              height={300}
              width={300}
              src={reactLogo}
              className="logo react"
              alt="React logo"
            />
          </a>
          <Heading>Update objects in state</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%" justifyContent="center" alignItems="center">
          <Heading fontSize="h2">Made with</Heading>
          <SpectacleLogo size={300} />
        </FlexBox>
      </Slide>
    </Deck>
  );
}

export default App;
