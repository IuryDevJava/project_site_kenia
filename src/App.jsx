import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ComunidadePage from "./pages/ComunidadePage";
import BookandQuestions from "./pages/BookandQuestions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="comunidade" element={<ComunidadePage />} />
        <Route path="livro" element={<BookandQuestions />} />
      </Route>
    </Routes>
  );
}

export default App;
