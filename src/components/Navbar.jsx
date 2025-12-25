import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <aside className="sidebar">
      <h2>Ecom</h2>

      <NavLink to="/products">Products</NavLink>

      <button onClick={() => dispatch(logout())}>Logout</button>
    </aside>
  );
};

export default Navbar;
