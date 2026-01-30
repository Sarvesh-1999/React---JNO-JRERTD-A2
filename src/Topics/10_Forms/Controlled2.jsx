import React, { useState } from "react";

const Controlled2 = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-extrabold mt-5">
        Learn Controlled - 2 Form
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border"
          placeholder="Enter Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          className="border"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          className="border"
          placeholder="Enter Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <button className="bg-yellow-300 px-2 mt-2">Submit</button>
      </form>
    </div>
  );
};

export default Controlled2;
