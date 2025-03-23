import { CodePane, FlexBox, Heading, Slide } from "spectacle";

export default function Slide03() {
  const langString = `const obj = {
  name: 'John Doe',
  age: 25
};

obj.name = 'Jane Doe';  // mutation of obj
`;

  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h3">Primitive values are immutable</Heading>
        <Heading fontSize="h3">Non-primitive values can be mutable</Heading>
        <CodePane language="js">{langString}</CodePane>
      </FlexBox>
    </Slide>
  );
}
