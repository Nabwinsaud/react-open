import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100vw",
        padding: "6px",
      }}
    >
      <NavLink to="/">Home </NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </div>
  );
}
