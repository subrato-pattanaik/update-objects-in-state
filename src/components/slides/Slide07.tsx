import {
  Slide,
  FlexBox,
  Heading,
  CodePane,
  UnorderedList,
  ListItem,
} from "spectacle";

export default function Slide07() {
  const codeString = `const [person, setPerson] = useState({
  name: "Foo bar",
  artwork: {
    title: "Blue Nana",
    city: "Hamburg",
  },
});

function handleArtworkTitleChange(e) {
  const newPerson = {
    ...person,
    artwork: { 
      ...person.artwork, 
      title: e.target.value 
    },
  };
  setPerson(newPerson); // ✅
}`;

  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="h3" style={{ marginBlock: 0 }}>
          Updating nested objects
        </Heading>

        <FlexBox style={{ justifyContent: "space-around" }}>
          <CodePane language="jsx">{codeString}</CodePane>

          <div>
            <Heading fontSize="24px" textAlign="left">
              Pain points
            </Heading>
            <UnorderedList fontSize="20px">
              <ListItem>👉 Prones to mistakes</ListItem>
              <ListItem>
                👉 Hard to read and understand what has change
              </ListItem>
              <ListItem>
                👉 Becomes complicated with long nested objects
              </ListItem>
            </UnorderedList>
          </div>
        </FlexBox>
      </FlexBox>
    </Slide>
  );
}
