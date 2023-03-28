import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import ProtectedRoute from "./components/protected-route.component";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./routes/account.component";
import Home from "./routes/home.component";
import Login from "./routes/login.component";
import SignUp from "./routes/sign-up.component";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
