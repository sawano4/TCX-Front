import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function FormLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // This effect will run whenever the login is successful
    console.log("Login successful:", formData);
  }, [formData]);

  const handleChange = (e) => {
    // Update the state when input values change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogIn = async () => {
    setIsLoading(true);
    const res = await fetch(
      "https://doc-organizer-db6r.onrender.com/medecins/login",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    if (res.status === 200) {
      const data = await res.json();
      const { accessToken, refreshToken } = data;
      localStorage.setItem(accessToken, "accessToken");
      localStorage.setItem(refreshToken, "accessToken");
      setIsLoading(false);
      navigate("/user");
    } else {
      setError(true);
      setErrorMsg("error");
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogIn();

    console.log("Form submitted with:", formData);
  };

  const displayError = error
    ? setTimeout(() => {
        return errorMsg;
      }, 3000)
    : "";

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <form
        onSubmit={handleSubmit}
        className="flex lg:w-1/3 bg-white mx-auto p-8 flex-col gap-8"
      >
        <div className="flex flex-col gap-4 justify-center align-center">
          <h1 className="text-center text-blue-700 text-3xl font-extrabold">
            Access your account
          </h1>
          <p className="text-center font-thin text-xl">
            Manage your medical situation and appointments with Calendly
          </p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Mail Address</label>
          <input
            type="text"
            id="email"
            name="email"
            className="border-2 rounded-lg p-3"
            placeholder="Mail Address"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col relative">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="border-2 rounded-lg p-3 pr-10"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 py-2"
            onClick={handleTogglePassword}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          <p className="text-white">gg</p>
        </div>
        <div className="flex flex-col gap-6">
          <button
            type="submit"
            className="w-full rounded-lg bg-teal-400 p-4 text-white"
          >
            {(isLoading && <h4>loading...</h4>) || "Connexion"}
          </button>
        </div>
        {displayError}
        <p className="text-center">
          Don{"'"}t have an account?
          <span className="text-blue-400">
            <Link to="/Signup"> Sign up</Link>{" "}
          </span>{" "}
        </p>
      </form>
    </div>
  );
}

export default FormLogin;
