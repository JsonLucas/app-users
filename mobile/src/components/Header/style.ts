import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
	Main: {
		width: '100%',
		height: '70px',
		backgroundColor: 'black',
		padding: '10px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'relative'
	},
	ProfilePictureBox: {
		width: '50px',
		height: '50px',
		borderRadius: 100,
		backgroundColor: 'lightgrey',
	},
	AppOptions: {
		position: 'absolute',
		top: '100%',
		right: '0px',
		backgroundColor: 'grey',
		borderRadius: 5
	},
	OptionsText: {
		padding: '8px',
		textAlign: 'center',
		fontSize: 18,
		color: 'white'
	},
	ProfilPicture: {
		widht: '100%',
		height: '100%',
		borderRadius: 50
	},
	PersonIcon: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
});