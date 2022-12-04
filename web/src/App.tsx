import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes";
import { useState } from "react";
import { UserContext } from "./contexts/user";
import { IUser } from "./interfaces/users";
import "react-toastify/dist/ReactToastify.css";

export const queryClient = new QueryClient();

function App() {
  const [profile, setProfile] = useState({} as IUser);
  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={{ profile, setProfile }}>
        <AppRoutes />
        <ToastContainer />
      </UserContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
