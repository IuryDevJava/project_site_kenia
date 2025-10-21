import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import ComunidadePage from "./pages/ComunidadePage";
import BookandQuestions from "./pages/BookandQuestions";

import useHashScrollOffset from "./hooks/useHashScrollOffset";
import PrivacyPolicy from "./pages/PrivatePolice";
import TermsOfUse from "./pages/TermsOfUse";
import CancellationPolicy from "./pages/CancellationPolicy";

function App() {
  useHashScrollOffset(131);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="comunidade" element={<ComunidadePage />} />
        <Route path="livro" element={<BookandQuestions />} />
        <Route path="politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="termos-de-uso" element={<TermsOfUse />} />
        <Route
          path="politica-de-cancelamento"
          element={<CancellationPolicy />}
        />
      </Route>
    </Routes>
  );
}

export default App;
