import { Form, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  //This transform a list of key value pair to an obj to make it more readable
  const data = Object.fromEntries(formData);

  //to handle the form error
 try {
  const response = await axios.post(newsletterUrl, data);
  // console.log(formData)
  //   console.log(data);
  console.log(response);
   toast.success(response.data.msg);
   //when using try & catch you need to set 2 error one for success(redirect) & for error
  return redirect("/");
 } catch (error) {
   console.log(error);
  //  we use optional chaining just incase if the options aren't there
   toast.error(error?.response?.data?.msg)
   return error;
 }

 
};

const Newsletter = () => {
  const navigation = useNavigate()
  const isSubmitting = navigation.state === "submitting"
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
        />
      </div>
      {/* last name */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          required
        />
      </div>
      {/* name */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          id="email"
          required
          defaultValue='test@test.com'
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
        disabled={isSubmitting}
      >
       {isSubmitting ? 'submitting' : submit}
      </button>
    </Form>
  );
};

export default Newsletter;
