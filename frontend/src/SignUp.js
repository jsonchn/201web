import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useForm} from 'react-hook-form';

function SignUp() {
  const { register, watch, formState: { errors }, handleSubmit } = useForm();

  function handleSignUp(data) {
    console.log("SignUp:");
    console.log(data);
  }

  return(
    <div className="box3">
      <h2>Sign up</h2>
      <Form onSubmit={handleSubmit(handleSignUp)}>
        <Form.Label>Email: </Form.Label>
        <br />
        <input {...register("email", {
          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          required: true
          })}/>
        {errors.email && errors.email.type == "required" && <p role="alert">⚠ Email is required</p>}
        {errors.email && errors.email.type == "pattern" && <p role="alert">⚠ Invalid email format</p>}
        <br />
        <Form.Label>Username: </Form.Label>
        <br />
        <input {...register("username", { required : true })}/>
        {errors.username && <p role="alert">⚠ Username is required</p>}
        <br />
        <Form.Label>Password: </Form.Label>
        <br />
        <input {...register("password", { required : true })}/>
        {errors.password && <p role="alert">⚠ Password is required</p>}
        <br />
        <Form.Label>Confirm Password: </Form.Label>
        <br />
        <input {...register("confirmpassword", {
          validate: (val) => {
            return watch('password') != val
          }
        })}/>
        {errors.confirmpassword && errors.confirmpassword.type == "validate" && <p role="alert">⚠ Passwords do not match</p>}
        <br />
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default SignUp;