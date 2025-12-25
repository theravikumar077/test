import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login({ email: "gg@gmail.com" }));
    navigate("/products");
  };

  return (
    <div className="auth">
      <h2>Sign In</h2>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
