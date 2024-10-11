//Create a form with a text input field using useState. The user should be able to type into the field,
// and the typed value should be displayed below the input field in real time.

import { useState } from "react";

const Displayed = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
    </div>
  );
};

export default Displayed;
