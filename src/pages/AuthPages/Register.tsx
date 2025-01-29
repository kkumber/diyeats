import { ReactEventHandler, useState } from "react";
import useAuthFetch from "../../hooks/AuthHooks/useAuthFetch";
import ErrorPage from "../../components/ErrorPage";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { data, isLoading, err, authFetch } = useAuthFetch();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    confirm_password: "",
  });
  const nav = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userData) {
      await authFetch("accounts/auth/register/", userData);
    }
    nav("/login");
  };

  const handleChangeuserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleRedirect = () => {
    nav("/login");
  };

  return (
    <div className="flex justify-center items-center transition-all duration-500 ease-in-out my-12">
      <form onSubmit={handleSubmit}>
        {isLoading && <Loading />}
        {err && <ErrorPage error={err} />}

        <h2 className="text-5xl mb-8 text-center">
          <b>Register</b>
        </h2>

        {/* Container for inputs */}
        <div className="bg-light-brown p-12 rounded-md text-xl">
          <label htmlFor="username">Enter Username: </label> <br />
          <input
            type="text"
            name="username"
            placeholder="Username"
            required={true}
            value={userData.username}
            onChange={handleChangeuserData}
            className="focus:outline-none rounded-sm bg-transparent border-b-2 py-2"
          />{" "}
          <br /> <br />
          <label htmlFor="email">Enter Email: </label> <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChangeuserData}
            className="focus:outline-none rounded-sm bg-transparent border-b-2 py-2"
          />{" "}
          <br /> <br />
          <label htmlFor="password">Enter Password: </label> <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required={true}
            value={userData.password}
            onChange={handleChangeuserData}
            className="focus:outline-none rounded-sm bg-transparent border-b-2 py-2"
          />{" "}
          <br /> <br />
          <label htmlFor="confirm_password">Confirm Password: </label> <br />
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            required={true}
            value={userData.confirm_password}
            onChange={handleChangeuserData}
            className="focus:outline-none rounded-sm bg-transparent border-b-2 py-2"
          />{" "}
          <br /> <br /> <br />
          {/* Buttons Container */}
          <div className="flex flex-wrap justify-between">
            <button
              type="submit"
              className="bg-dark-brown py-2 px-4 rounded-full text-white hover:-translate-y-1 ease-in-out"
            >
              Sign up
            </button>
            <button
              onClick={() => handleRedirect()}
              className="py-2 px-4 rounded-full text-light-brown bg-white hover:-translate-y-1 ease-in-out"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
