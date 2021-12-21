import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./home";
import Profile from "./profile";
import Demo from "./demo";
import "remixicon/fonts/remixicon.css";

export default function App() {
	const Stack = createNativeStackNavigator();
	return (
		<>
			<NavigationContainer initialRouteName="Home">
				<Stack.Navigator>
					<Stack.Screen name="Home" component={Login} />
					<Stack.Screen name="Profile" component={Profile} />
					<Stack.Screen name="Demo" component={Demo} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
