import NavigationBar from "./components/navigation/NavigationBar";
import { useState } from "react";
import { Route, 
  Routes, 
  Navigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import OrderFormPage from "./components/orderForm/OrderFormPage";
import ManageEmployees from "./components/pages/ManageEmployees";
import AmazonSearchHome from "./components/amazonAPI/ItemSearch/AmazonSearchHome";
import SignInPage from "./components/pages/SignInPage";
import Register from "./components/pages/Register";
import LogoutPage from "./components/pages/LogoutPage";
import SearchPage from "./components/pages/SearchPage";
import Footer from "./components/footer/Footer";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavigationBar authenticated={authenticated} />
      <main className="flex-grow-1">
        <Routes>
          {!authenticated ? (
            <>
            <Route path="/sign-in" element={<SignInPage setAuthenticated={setAuthenticated} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/sign-in" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/order" element={<OrderFormPage />} />
              <Route path="/amazon" element={<AmazonSearchHome />} />
              <Route path="/manage" element={<ManageEmployees />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/logout" element={<LogoutPage setAuthenticated={setAuthenticated} />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
