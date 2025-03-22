import {
  Deck,
  DefaultTemplate,
  FlexBox,
  Heading,
  Slide,
  SpectacleLogo,
} from "spectacle";

function App() {
  return (
    <>
      <Deck template={() => <DefaultTemplate />}>
        <Slide>
          <FlexBox height="100%">
            <Heading>test</Heading>
          </FlexBox>
        </Slide>
        <Slide>
          <FlexBox height="100%">
            <Heading fontSize="h2">Made with</Heading>
            <SpectacleLogo size={300} />
          </FlexBox>
        </Slide>
      </Deck>
    </>
  );
}

export default App;
