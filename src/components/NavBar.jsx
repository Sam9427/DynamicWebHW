import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ padding: "10px", background: "#a0d8f1", display: "flex", gap: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/rating">Star Rating</Link>
    </nav>
  );
}
