import { SafeAreaView } from "react-native-safe-area-context";
import { CardLogin } from "../../components/Cards/CardLogin";
import { Main } from "../../styles";
import { useContext, useEffect } from 'react';
import { LoggedContext } from "../../contexts/logged";

export function Login({navigation}: any) {
	const { isLogged } = useContext(LoggedContext);
	useEffect(() => {
		if(isLogged){
			navigation.navigate('Home');
		}
	}, []);
	return (
		<SafeAreaView style={Main.CardContainer}>
			<CardLogin navigation={navigation} />
		</SafeAreaView>
	);
}