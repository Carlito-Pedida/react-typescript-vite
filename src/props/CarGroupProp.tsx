import { useState } from "react";

const CarGroupProp = ({ carBrands, heading }: any) => {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  const handleSelectItem = (car: any) => {
    console.log(car);
  };

  return (
    <>
      <h1>{heading}</h1>

      <ul className="list-group">
        {carBrands.map((car: any, index: any) => (
          <li
            key={car}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              handleSelectItem(car);
              setSelectedIndex(index);
            }}
          >
            {car}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CarGroupProp;
