import { Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout.jsx";
import Main from "./pages/Main.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
