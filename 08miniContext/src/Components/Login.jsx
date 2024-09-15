import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // taking setUser from UserContext
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="bg-slate-100 p-10 rounded-xl">
      <h1 className="text-black select-none">Login</h1>
      <div className='flex flex-col'>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          className="m-10 mb-2 p-3 rounded-lg text-sm"
        />{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="m-10 mt-0 mb-5 p-3 rounded-lg text-sm"
        />
        <button onClick={handleSubmit} className="border-2 mb-3 hover:bg-white hover:border-solid hover:border-black hover:border-2 hover:text-black hover:italic outline-none">Submit</button>
      </div>
    </div>
  );
}

export default Login;
