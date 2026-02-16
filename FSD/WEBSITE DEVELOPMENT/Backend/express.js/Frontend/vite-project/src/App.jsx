import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import toast, { ToastContainer } from "react-toastify";
import axios from "axios";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  // const [name, setName] = useState("");
  // const [age, setAge] = useState(0);
  // const [phone, setPhone] = useState(0);
  // const [email, setEmail] = useState("");

  // const PutData = async (event) => {
  //   event.PreventDefault;

  //   try {
  //     const res = await axios.post("http://localhost:9000/add-data", {
  //       name: name,
  //       age: age,
  //       phone: phone,
  //       email: email,
  //     });

  //     setName("");
  //     setAge(0);
  //     setPhone(0);
  //     setEmail("");

  //     console.log(res);
  //     toast.success("Data Added");
  //   } catch (err) {
  //     console.log(err);
  //     toast.error("Data Not Added");
  //   }
  // };

  // return (
  //   <>
  //     <ToastContainer />
  //     <div>
  //       <input
  //         type="text"
  //         placeholder="enter the name"
  //         value={name}
  //         onChange={(event) => {
  //           setName(event.target.value);
  //         }}
  //       />
  //       <br />
  //       <input
  //         type="number"
  //         placeholder="enter age"
  //         value={age}
  //         onChange={(event) => {
  //           setAge(event.target.value);
  //         }}
  //       />
  //       <br />
  //       <input
  //         type="number"
  //         placeholder="enter phoneNumber"
  //         value={phone}
  //         onChange={(event) => {
  //           setPhone(event.target.value);
  //         }}
  //       />
  //       <br />
  //       <input
  //         type="text"
  //         placeholder="enter email"
  //         value={email}
  //         onChange={(event) => {
  //           setEmail(event.target.value);
  //         }}
  //       />
  //       <br />
  //       <button
  //         onClick={(event) => {
  //           PutData(event);
  //         }}
  //       >
  //         Put Data
  //       </button>
  //     </div>
  //   </>
  // );

  const generate_token = () => {
    try {
      const res = axios.get("http://localhost:5173/send-mail", {
        withCredentials: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button onClick="generate_token">generate-token</button>
      <button onClick = "verify_token"></button>
    </>
  );
}

export default App;
