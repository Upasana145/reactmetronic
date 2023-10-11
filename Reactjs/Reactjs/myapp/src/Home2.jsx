import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:8081")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .catch((err) => {
        console.log(err);
        setAuth(false);
        setMessage("Error occurred while fetching data.");
      });
  }, []);

  const handleDelete = () => {
    axios
      .get("http://localhost:8081/logout")
      .then(() => {
        setAuth(false); // Update the auth state to false to trigger the login view
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-4">
      {auth ? (
        <div>
          <h3>You are Authorized ------{name}</h3>
          <button className="btn btn-danger" onClick={handleDelete}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h3>Login Now</h3>
          <h3>{message}</h3>
          <Link to="/" className="btn btn-primary">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
