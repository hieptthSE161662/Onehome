import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/itemdetails/:id" element={<ItemDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
