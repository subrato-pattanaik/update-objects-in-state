import React from "react";
import { CodePane, FlexBox, Heading, Slide } from "spectacle";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useImmer } from "use-immer";

export default function Slide06() {
  const langString = `function Form() {
  const [person, setPerson] = useImmer({
    firstName: 'Foo',
    lastName: 'Bar'
  });

  function handleFirstNameChange(e) {
    setPerson((draft ) => {
      draft.firstName = e.target.value
    }); // ✅
    // person === newPerson // false
  }

  function handleLastNameChange(e) {
    setPerson((draft ) => {
      draft.firstName = e.target.value
    }); // ✅
  }
}`;

  const [person, setPerson] = useImmer({
    firstName: "Foo",
    lastName: "Bar",
  });

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson((draft) => {
      draft.firstName = e.target.value;
    }); // ✅
    // person === newPerson // false
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson((draft) => {
      draft.lastName = e.target.value;
    }); // ✅
  }

  return (
    <Slide>
      <Heading fontSize="h3" style={{ marginBlock: 0, paddingTop: 0 }}>
        Example: useImmer hook
      </Heading>

      <FlexBox
        justifyContent="flex-start"
        style={{ gap: "1rem", justifyContent: "space-around" }}
      >
        <CodePane
          language="jsx"
          highlightRanges={[
            [2, 5],
            [8, 10],
          ]}
        >
          {langString}
        </CodePane>
        <div className="flex flex-col justify-center gap-4 bg-background border-4 rounded-md p-12 h-72">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="firstname">First name:</Label>
            <Input
              id="firstname"
              value={person.firstName}
              onChange={handleFirstNameChange}
              maxLength={25}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="lastname">Last name: </Label>
            <Input
              id="lastname"
              value={person.lastName}
              onChange={handleLastNameChange}
              maxLength={25}
            />
          </div>

          <div className="mt-9">
            <h2>
              Full name: {person.firstName} {person.lastName}
            </h2>
          </div>
        </div>
      </FlexBox>
    </Slide>
  );
}
