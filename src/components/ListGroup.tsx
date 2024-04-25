const ListGroup = () => {
  const cityNames: any = [
    "New York",
    "San Francisco",
    "London",
    "Paris",
    "Manila"
  ];

  return (
    <>
      <h1>This is a List of Cities I like to visit!</h1>
      {cityNames.length === 0 && <p>No List Found</p>}
      <ul className="list-group">
        {cityNames.map((city: any, idx: any) => (
          <li key={idx} className="list-group-item">
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
