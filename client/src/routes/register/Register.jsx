import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import apiRequest from "../../lib/apiRequest";

const Register = () => {
  const [error, setError] = useState();
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(username, email, password);

    try {
      const res = await apiRequest.post("auth/register", {
        username,
        email,
        password,
      });
      console.log(res.data);
      navigate("/login");
    } catch (e) {
      console.log(e);
      setError(e.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="registerPage">
      <div className="formContainer">
        <form action="" onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input type="text" placeholder="Userame" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Register</button>
          {error && <span>{error}</span>}
          <Link to={"/login"}>Do you have an account</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Register;
