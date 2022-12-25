import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Profile } from "../pages/Profile";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { NotFound } from "../pages/NotFound";
import { AuthContext } from "../contexts/auth";
import { useState, useEffect } from "react";
import { getToken } from "@chakra-ui/react";

export function AppRoutes() {
  const { getToken } = useLocalStorage();
  const [logged, setLogged] = useState(getToken() ? true : false);
  return (
    <AuthContext.Provider value={{ logged, setLogged }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {logged && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
