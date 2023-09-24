import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Header from "./components/Header";
import AboutPage from './pages/About';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
