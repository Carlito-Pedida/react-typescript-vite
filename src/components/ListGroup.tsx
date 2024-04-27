import CarGroupProp from "../props/CarGroupProp";
import ColorGroupProp from "../props/ColorGroupProp";
import ListGroupProp from "../props/ListGroupProp";

const ListGroup = () => {
  const cityNames: any = [
    "New York",
    "San Francisco",
    "London",
    "Paris",
    "Manila"
  ];

  const colorNames: any = ["Blue", "Red", "Purple", "Green", "Orange"];

  const carBrands: any = [
    "Ford",
    "BMW",
    "Audi",
    "Mercedez Benz",
    "Rolls Royce"
  ];

  return (
    <div>
      {cityNames.length === 0 && <p>No List Found</p>}
      <ListGroupProp
        heading="This is a List of Cities I like to visit!"
        cityNames={cityNames}
      />
      {colorNames.length === 0 && <p>No List Found</p>}
      <ColorGroupProp
        heading="This is my List of favorite colors"
        colorNames={colorNames}
      />
      {carBrands.length === 0 && <p>No Cars Found</p>}
      <CarGroupProp
        heading="This is a list of my cars!"
        carBrands={carBrands}
      />
    </div>
  );
};

export default ListGroup;
