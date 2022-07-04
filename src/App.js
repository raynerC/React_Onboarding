import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import NewsGrid from "./NewsGrid";
import SecondPage from "./SecondPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route path="/NewsGrid" element={<NewsGrid />} />
        <Route path="/SecondPage" element={<SecondPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
