import { SafeAreaView } from "react-native-safe-area-context";
import { CardSignUp } from "../../components/Cards/CardSignUp";
import { Main } from "../../styles";
import { useContext, useEffect } from 'react';
import { LoggedContext } from "../../contexts/logged";

export function SignUp({navigation}: any) {
	const { isLogged } = useContext(LoggedContext);
	useEffect(() => {
		if(isLogged){
			navigation.navigate('Home');
		}
	}, []);
	return (
		<SafeAreaView style={Main.CardContainer}>
			<CardSignUp navigation={navigation} />
		</SafeAreaView>
	);
}