import { useState } from "react";

const ColorGroupProp = ({ colorNames, heading }: any) => {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSelectItem = (color: any) => {
    console.log(color);
  };

  return (
    <>
      <h1>{heading}</h1>

      <ul className="list-group">
        {colorNames.map((color: any, index: any) => (
          <li
            key={color}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              handleSelectItem(color);
              setSelectedIndex(index);
            }}
          >
            {color}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ColorGroupProp;
