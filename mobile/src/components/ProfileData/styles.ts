import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
	Container: {
		marginTop: '25px',
		marginHorizontal: 'auto',
		width: '95%',
		flex: 1,
		display: 'flex'
	},
	ProfileImageBox: {
		width: '150px',
		height: '150px',
		borderRadius: 100,
		backgroundColor: 'lightgrey',
		position: 'relative'
	},
	Wrapper: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		zIndex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	ContentImageBox: {
		height: '100%', 
		width: '100%',
		borderRadius: 100 
	},
	UploadOptionButton: {
		padding: '10px',
		borderRadius: 5,
		backgroundColor: 'grey',
		color: 'white',
		textAlign:' center',
		marginTop: '10px',
		maxWidth: '150px',
		maxHeight: '60px'
	},
	BoxUserData: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: '10px'
	},
	UserDataRow: {
		display: 'flex',
		flexDirection: 'row',
	},
	UserDataLabel: {
		color: 'white'
	},
	UserDataInfo: {
		paddingLeft: '5px',
		fontWeight: 'bold',
		color: 'white',
	}
});