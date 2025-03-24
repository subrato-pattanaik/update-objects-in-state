import React, { useState } from "react";
import { CodePane, FlexBox, Heading, Slide } from "spectacle";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function Slide06() {
  const codeString = `function Form() {
  const [person, setPerson] = useState({
    firstName: 'Foo',
    lastName: 'Bar'
  });

  function handleFirstNameChange(e) {
    const newPerson = { ...person, firstName: e.target.value };
    setPerson(newPerson); // ✅
    // person === newPerson // false
  }

  function handleLastNameChange(e) {
    const newPerson = { ...person, lastName: e.target.value };
    setPerson(newPerson); // ✅
  }
}`;

  const [person, setPerson] = useState({
    firstName: "Foo",
    lastName: "Bar",
  });

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newPerson = { ...person, firstName: e.target.value };
    setPerson(newPerson); // ✅
    // person === newPerson // false
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newPerson = { ...person, lastName: e.target.value };
    setPerson(newPerson); // ✅
  }

  return (
    <Slide>
      <Heading fontSize="h3">Example: Use setState function</Heading>

      <FlexBox
        justifyContent="flex-start"
        style={{ gap: "1rem", justifyContent: "space-around" }}
      >
        <CodePane language="jsx" highlightRanges={[7, 15]}>
          {codeString}
        </CodePane>
        <div className="flex flex-1 flex-col justify-center gap-4 bg-background border-4 rounded-md p-12 h-72">
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
