import {
  Slide,
  FlexBox,
  Heading,
  UnorderedList,
  ListItem,
  CodePane,
  Text,
} from "spectacle";

export default function Slide02() {
  return (
    <Slide>
      <FlexBox
        textAlign="left"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        height="100%"
      >
        <Heading
          fontSize="h3"
          style={{ marginBlock: "0px", paddingBlock: "0px" }}
        >
          States can hold any javascript values.
        </Heading>

        <UnorderedList style={{ paddingBlock: "0px", marginBlock: "0px" }}>
          <ListItem style={{ paddingBlock: "0px", marginBlock: "0px" }}>
            <FlexBox flexDirection="column" alignItems={"flex-start"}>
              <Text fontSize="24px">Primitive values</Text>
              <CodePane language="jsx" highlightRanges={[1, 2, 3]}>
                {`const [count, setCount] = useState(0); // number
const [name, setName] = useState('John Doe'); // string
const [isOnline, setIsOnline] = useState(true); // boolean
`}
              </CodePane>
            </FlexBox>
          </ListItem>

          <ListItem style={{ paddingBlock: "0px", marginBlock: "0px" }}>
            <FlexBox flexDirection="column" alignItems={"flex-start"}>
              <Text fontSize="24px">Non - Primitive values</Text>
              <CodePane language="js" highlightRanges={[[1, 4], 6]}>
                {`const [user, setUser] = useState({ 
 name: 'John Doe',
 age: 25
}); // object

const [colors, setColors] = useState(['red', 'green', 'blue']); // array
`}
              </CodePane>
            </FlexBox>
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
  );
}
