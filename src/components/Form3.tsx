import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  city: z.string().min(3, { message: "Location field is required!" }),
  zipcode: z.number({ invalid_type_error: "Age field is required" })
});

type FormData = z.infer<typeof schema>;

const Form3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>

          <input
            {...register("city")}
            id="city"
            type="text"
            className="form-control"
          />
          {errors.city && <p className="text-danger">{errors.city.message}</p>}

          <div className="mb-3">
            <label htmlFor="zipcode" className="form-label">
              Zipcode
            </label>
            <input
              {...register("zipcode", { valueAsNumber: true })}
              id="zipcode"
              type="number"
              className="form-control"
            />
            {errors.zipcode && (
              <p className="text-danger">{errors.zipcode.message}</p>
            )}
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
