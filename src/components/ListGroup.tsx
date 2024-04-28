import CarGroupProp from "../props/CarGroupProp";
import ColorGroupProp from "../props/ColorGroupProp";
import ListGroupProp from "../props/ListGroupProp";
import "../styles/ListGroup.css";

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
  const heading: any = [
    "Cities I like to visit",
    "List of favorite colors",
    "List of my cars"
  ];

  return (
    <div className="frames">
      <div className="blocks">
        {cityNames.length === 0 && <p>No List Found</p>}
        <ListGroupProp heading={heading[0]} cityNames={cityNames} />
      </div>
      <div className="blocks">
        {colorNames.length === 0 && <p>No List Found</p>}
        <ColorGroupProp heading={heading[1]} colorNames={colorNames} />
      </div>
      <div className="blocks">
        {carBrands.length === 0 && <p>No Cars Found</p>}
        <CarGroupProp heading={heading[2]} carBrands={carBrands} />
      </div>
    </div>
  );
};

export default ListGroup;
