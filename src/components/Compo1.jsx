import React, { useState } from "react";
import { UserContext } from "./Usecontext";
import Compo2 from "./Compo2";

export default function Compo1() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [users, setusers] = useState([]);

  const handlesubmitt = (e) => {
    e.preventDefault();
    

    const newuser = { name, email, mobile };
    setusers([...users, newuser]);
    setname("");
    setemail("");
    setmobile("");
  };

  // internal styles
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f4f6f9",
    minHeight: "100vh",
  };

  const formStyle = {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  };

  const inputStyle = {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
    flex: "1",
  };

  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
  };

  const buttonHover = {
    backgroundColor: "#0056b3",
  };

  return (
    <UserContext.Provider value={{ users }}>
      <div style={containerStyle}>
        <h2>User Management</h2>

        <Compo2 />

        <form onSubmit={handlesubmitt} style={formStyle}>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter your name"
            style={inputStyle}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter your email"
            style={inputStyle}
          />
          <input
            type="text"
            value={mobile}
            onChange={(e) => setmobile(e.target.value)}
            placeholder="Enter your mobile number"
            style={inputStyle}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = buttonHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = buttonStyle.backgroundColor)
            }
          >
            Add
          </button>
        </form>
      </div>
    </UserContext.Provider>
  );
}
