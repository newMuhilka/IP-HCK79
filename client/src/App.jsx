import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";

import NotFoundPage from "./pages/NotFoundPage";
import TestPage from "./pages/TestPage";

function App() {
  return (
      <BrowserRouter>

        <Routes>
          <Route path="/test" element={<TestPage />} />
          <Route element={<PublicLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          <Route element={<AuthLayout />}>

          </Route>

          <Route path=":notFound" element={<NotFoundPage />} />
        </Routes>
        
      </BrowserRouter>
  );
}

export default App;