import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AppRoutes } from "./src/routes";
import { useEffect, useState } from "react";
import { LoggedContext } from "./src/contexts/logged";
import { useToken } from "./src/hooks/useToken";
import { QueryClient, QueryClientProvider } from "react-query";
import Toast from 'react-native-toast-message';

export const queryClient = new QueryClient();

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const { getToken } = useToken();
  useEffect(() => {
    (async () => {
      const token = await getToken();
      if (token) {
        setIsLogged(true);
      }
    })();
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <LoggedContext.Provider value={{ isLogged, setIsLogged }}>
        <NavigationContainer>
          <AppRoutes />
          <StatusBar style="auto" />
		  <Toast />
        </NavigationContainer>
      </LoggedContext.Provider>
    </QueryClientProvider>
  );
}
