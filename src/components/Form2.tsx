import { FormEvent, useState } from "react";

const Form2 = () => {
  const [location, setLocation] = useState({
    city: "",
    zipcode: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(location);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container mb-3">
          <label htmlFor="name" className="form-label">
            City
          </label>
          <input
            value={location.city}
            onChange={(e) => setLocation({ ...location, city: e.target.value })}
            id="name"
            type="text"
            className="form-control"
          />
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Zipcode
            </label>
            <input
              value={location.zipcode}
              onChange={(e) =>
                setLocation({ ...location, zipcode: e.target.value })
              }
              id="age"
              type="number"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
