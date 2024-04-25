import { useState } from "react";

const ListGroup = () => {
  const cityNames: any = [
    "New York",
    "San Francisco",
    "London",
    "Paris",
    "Manila"
  ];

  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>This is a List of Cities I like to visit!</h1>
      {cityNames.length === 0 && <p>No List Found</p>}
      <ul className="list-group">
        {cityNames.map((city: any, index: any) => (
          <li
            key={city}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
