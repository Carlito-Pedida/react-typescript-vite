import { useState } from "react";

const ListGroupProp = ({ cityNames, heading }: any) => {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>

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

export default ListGroupProp;
