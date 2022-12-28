import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { LoggedContext } from "../contexts/logged";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Profile } from "../screens/Profile";
import { SignUp } from "../screens/SignUp";

export const Navigator = createBottomTabNavigator();
export function AppRoutes() {
  const { isLogged } = useContext(LoggedContext);
  return (
    <Navigator.Navigator initialRouteName="Login" screenOptions={{ tabBarStyle: { display: "none" }, header: () => <></> }}>
      {!isLogged && (
        <>
          <Navigator.Screen name="Login" component={Login} />
          <Navigator.Screen name="SignUp" component={SignUp} />
        </>
      )}
      {isLogged && (
        <>
          <Navigator.Screen name="Home" component={Home} />
          <Navigator.Screen name="Profile" component={Profile} />
        </>
      )}
    </Navigator.Navigator>
  );
}
