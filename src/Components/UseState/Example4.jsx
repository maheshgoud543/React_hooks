//Build a temperature converter using useState. The user can input a temperature in Celsius,
// and the component should display the equivalent Fahrenheit value. Use the formula F = C × 9/5 + 32.

// import { useState } from "react";

// const TemperatureCon = () => {
//   const [temp, setTemp] = useState();
//   const [conv, setConv] = useState();
//   const handleConvert = () => {
//     setConv((temp * 9) / 5 + 32);
//   };

//   return (
//     <div>
//       <p>Temperature Convertor</p>
//       <input
//         placeholder="temp in ceslius"
//         value={temp}
//         onChange={(e) => setTemp(e.target.value)}
//       />
//       <button onClick={handleConvert}>Convert </button>
//       <p>{conv}</p>
//     </div>
//   );
// };

// export default TemperatureCon;

import { useState } from "react";

const TemperatureCon = () => {
  const [temp, setTemp] = useState("");
  const [conv, setConv] = useState(null);

  const handleConvert = () => {
    const celsius = parseFloat(temp);
    if (!isNaN(celsius)) {
      setConv((celsius * 9) / 5 + 32);
      setTemp("");
    } else {
      setConv("Invalid input");
    }
  };

  return (
    <div>
      <p>Temperature Converter</p>
      <input
        placeholder="Temp in Celsius"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />
      <button onClick={handleConvert}>Convert</button>
      <p>{conv !== null ? `Fahrenheit: ${conv}` : ""}</p>
    </div>
  );
};

export default TemperatureCon;
