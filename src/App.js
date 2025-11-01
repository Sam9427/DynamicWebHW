import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import StarRatingPage from "./pages/StarRatingPage";

function Home() {
  return <h1 style={{ padding: "20px" }}>Home Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rating" element={<StarRatingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
