import { CodePane, FlexBox, Heading, Slide } from "spectacle";
import { Input } from "../ui/input";
import React, { useState } from "react";
import { Label } from "../ui/label";

export default function Slide05() {
  const langString = `function Form() {
  const [person, setPerson] = useState({
    firstName: 'Foo',
    lastName: 'Bar'
  });

  function handleFirstNameChange(e) {
    person.firstName = e.target.value; // ❌
  }

  function handleLastNameChange(e) {
    person.lastName = e.target.value; // ❌
  }
}`;

  const [person, _setPerson] = useState({
    firstName: "Foo",
    lastName: "Bar",
  });

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    person.firstName = e.target.value;
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    person.lastName = e.target.value;
  }

  return (
    <Slide>
      <Heading fontSize="h3">Example: Don't mutate object in state</Heading>

      <FlexBox
        justifyContent="flex-start"
        style={{ gap: "1rem", justifyContent: "space-around" }}
      >
        <CodePane language="jsx">{langString}</CodePane>
        <div className="flex flex-col justify-center gap-4 bg-background border-4 rounded-md p-12 h-72">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="firstname">First name:</Label>
            <Input
              id="firstname"
              value={person.firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="lastname">Last name: </Label>
            <Input
              id="lastname"
              value={person.lastName}
              onChange={handleLastNameChange}
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
