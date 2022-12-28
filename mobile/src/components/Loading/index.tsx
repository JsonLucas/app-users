import { ThreeDots } from "react-loader-spinner";
import { View } from "react-native";

export function Loading() {
	return(
		<View style={{display:'flex', justifyContent: 'center', alignItems: 'center', flex: 1}}>
			<ThreeDots color='white' />
		</View>
	);
} 