//Develop a simple form with two fields (name and age) using useState.
//As the user types, update a paragraph below that displays "Hello [name], you are [age] years old."

import { useState } from "react";

const Develop = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  return (
    <div>
      <label>
        name:
        <input
          type="name"
          placeholder="Type ur name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        age:
        <input
          type="number"
          placeholder="Enter ur age"
          value={age}
          onChange={(e) =>
            setAge(e.target.value ? parseInt(e.target.value) : "")
          }
        />
      </label>

      <p>
        The name is {name} and the age is {age}
      </p>
    </div>
  );
};

export default Develop;
