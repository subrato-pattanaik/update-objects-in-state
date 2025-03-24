import { Slide, Heading, UnorderedList, ListItem, CodePane } from "spectacle";

export default function Slide08() {
  return (
    <Slide>
      <Heading fontSize="h3">Write concise update logic with Immer </Heading>

      <UnorderedList fontSize="36px">
        <ListItem>👉 Immer is a tiny and popular library.</ListItem>
        <ListItem>
          👉 It allows you to write simpler update logic for your state.
        </ListItem>
        <ListItem>
          👉 It allows you to write code that looks like you are mutating the
          state directly.
        </ListItem>
      </UnorderedList>

      <CodePane language="js">
        {`setPerson(draft => {
  draft.artwork.city = 'Lagos';
});`}
      </CodePane>
    </Slide>
  );
}
