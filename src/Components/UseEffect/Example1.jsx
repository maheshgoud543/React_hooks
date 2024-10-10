import { useEffect, useState } from "react";

const DataFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <ul>
        {data.map((d) => (
          <li>{d.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetch;
