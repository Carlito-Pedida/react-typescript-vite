import { MouseEvent } from "react";
const ListGroup = () => {
  const cityNames: any = [
    "New York",
    "San Francisco",
    "London",
    "Paris",
    "Manila"
  ];

  // Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>This is a List of Cities I like to visit!</h1>
      {cityNames.length === 0 && <p>No List Found</p>}
      <ul className="list-group">
        {cityNames.map((city: any, index: any) => (
          <li key={index} className="list-group-item" onClick={handleClick}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
