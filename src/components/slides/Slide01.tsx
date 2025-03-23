import { Slide, FlexBox, Heading } from "spectacle";
import reactLogo from "../../assets/react.svg";

export default function Slide01() {
  return (
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
  );
}
