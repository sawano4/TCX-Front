import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    phonenumber: "",
    email: "",
    password: "",
    gender: "",
    specialite: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const CreateDoctor = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://doc-organizer-db6r.onrender.com/medecins/register",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        const data = await res.json();
        const { accessToken, refreshToken } = data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        console.log("Doctor created successfully:", data);
        setIsLoading(false);
        navigate("/user");
      } else {
        console.error("Failed to create doctor:", res.statusText);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error creating doctor:", error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    CreateDoctor();

    console.log("Form submitted with:", formData);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-12 w-full ">
      <form onSubmit={handleSubmit} className="lg:w-2/3  mx-auto p-8 gap-8 ">
        <div className="flex flex-col gap-4 justify-center items-center  mb-8 ">
          <h1 className="text-center text-blue-700 text-3xl font-extrabold">
            Join us to get started
          </h1>
          <p className="text-center font-thin text-xl">
            Easily manage your patients situation with Calendly
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center lg:w-[70%] mx-auto">
          <div className="flex flex-col w-full sm:w-1/2 lg:w-[40%] ">
            <label htmlFor="firstName"> FirstName</label>
            <input
              required
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstname}
              className="border-2 rounded-lg px-3 py-2"
              placeholder="FirstName"
              onChange={(e) =>
                setFormData({ ...formData, firstname: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2 lg:w-[40%] ">
            <label htmlFor="lastName"> LastName</label>
            <input
              required
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastname}
              className="border-2 rounded-lg px-3 py-2"
              placeholder="LastName"
              onChange={(e) =>
                setFormData({ ...formData, lastname: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2 lg:w-[40%] ">
            <label htmlFor="lastName"> username</label>
            <input
              required
              type="text"
              id="username"
              name="username"
              value={formData.username}
              className="border-2 rounded-lg px-3 py-2"
              placeholder="LastName"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2 lg:w-[40%] ">
            <label htmlFor="phoneNumber">PhoneNumber</label>
            <input
              required
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="border-2 rounded-lg px-3 py-2"
              placeholder="PhoneNumber"
              value={formData.phonenumber}
              onChange={(e) =>
                setFormData({ ...formData, phonenumber: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2 lg:w-[40%] ">
            <label htmlFor="email"> Mail Adress</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="border-2 rounded-lg px-3 py-2"
              placeholder="Mail Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2 lg:w-[40%]  relative mb-8  ">
            <label htmlFor="gender">gender</label>
            <input
              required
              value={formData.gender}
              id="gender"
              name="gender"
              className="border-2 rounded-lg px-3 py-2 pr-10"
              placeholder="gender"
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2 lg:w-[40%]  relative mb-8  ">
            <label htmlFor="password">password</label>
            <input
              required
              type="password"
              value={formData.password}
              id="gender"
              name="gender"
              className="border-2 rounded-lg px-3 py-2 pr-10"
              placeholder="gender"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2 lg:w-[40%]   relative mb-8  ">
            <label htmlFor="speciality">speciality</label>
            <input
              required
              type={"text"}
              value={formData.specialite}
              id="speciality"
              name="speciality"
              className="border-2 rounded-lg px-3 py-2 pr-10"
              placeholder="speciality"
              onChange={(e) =>
                setFormData({ ...formData, specialite: e.target.value })
              }
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex px-3 py-2 items-center justify-center"
              onClick={handleTogglePassword}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6 mb-8 ">
          <button
            type="submit"
            className="w-1/2 rounded-lg bg-teal-400 p-4 mx-auto text-white"
          >
            {(isLoading && <h2>loading...</h2>) || "register"}
          </button>
        </div>
        <p className="text-center">
          Already have an account ?
          <span className="text-blue-400">
            <Link to="/login"> Login</Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;
