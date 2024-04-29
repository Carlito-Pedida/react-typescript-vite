import { useForm } from "react-hook-form";

interface Formdata {
  city: string;
  zipcode: number;
}

const Form3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Formdata>();

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>

          <input
            {...register("city", { required: true, minLength: 8 })}
            id="city"
            type="text"
            className="form-control"
          />
          {errors.city?.type === "required" && (
            <p className="text-danger">The name field is required!</p>
          )}
          {errors.city?.type === "minLength" && (
            <p className="text-danger">Did not meet character length!</p>
          )}
          <div className="mb-3">
            <label htmlFor="zipcode" className="form-label">
              Zipcode
            </label>
            <input
              {...register("zipcode")}
              id="zipcode"
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

export default Form3;
