import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useForm} from 'react-hook-form';

function Login() {
  const { register, formState: { errors }, handleSubmit } = useForm();

  function handleLogin(data) {
    console.log("Login:");
    console.log(data);
  }

  return(
    <div className="box2">
      <h2>Log in</h2>
      <Form onSubmit={handleSubmit(handleLogin)}>
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
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default Login;