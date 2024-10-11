//The useRefhook allows you to create a mutable ref that persists for the lifetime of component . u can use to store and access values
//that dont trigger a re-render

import { useRef } from "react";

function InputWithfocus() {
  const inputref = useRef();

  const handleClick = () => {
    inputref.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputref} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default InputWithfocus;