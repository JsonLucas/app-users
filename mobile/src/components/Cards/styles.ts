import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
	Container: {
		width: '95%',
		marginHorizontal: 'auto',
		boxShadow: '0px 1px 10px 0px black',
		backgroundColor: '#444',
		borderRadius: 5
	},
	TopCardLabel: {
		padding: 15,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	BoxField: {
		padding: 10,
		width: '100%'
	},
	Button: {
		padding: 10,
		width: '100%',
		backgroundColor: 'lightblue',
		display: 'flex', 
		justifyContent: 'center', 
		alignItems: 'center',
		borderRadius: 10
	},
	SignUpText: {
		color: 'white',
		textAlign: 'center',
		fontSize: 19,
		padding: 5
	}
});