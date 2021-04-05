import React, { useState } from "react";
import { Button, FormControl, InputGroup, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { customerSignIn } from "../../api/customers";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRestaurantConetxt } from "../../Context/restaurantContext";

export default function SignIn({ onHide }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const { setToken } = useRestaurantConetxt();
  const [loading, setLoading] = useState(false);

  const signIn = async (data) => {
    try {
      setLoading(true);
      const res = await customerSignIn(data);
      window.localStorage.setItem("token", res?.data?.token);
      setToken(res?.data?.token);
      onHide();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Invalid email or password");
      console.log({ errors });
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(signIn)}>
      <label htmlFor="email">Email Address</label>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Email Address"
          aria-label="Email Address"
          aria-describedby="basic-addon1"
          id="email"
          name="email"
          ref={register({
            required: "Email Address required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          error={errors.email ? true : false}
        />
        <p>{errors?.email?.message}</p>
      </InputGroup>

      <label htmlFor="password">Password</label>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
          id="password"
          type="password"
          name="password"
          ref={register({
            required: "Password required",
            minLength: {
              value: 8,
              message: "Password must be 8 character",
            },
          })}
          error={errors.password ? true : false}
        />
        <p>{errors?.password?.message}</p>
      </InputGroup>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="outline-primary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="outline-primary" type="submit">
          {loading && (
            <Spinner
              animation="border"
              size="sm"
              style={{ marginRight: "10px" }}
            />
          )}
          Sign In
        </Button>
      </div>
    </form>
  );
}
