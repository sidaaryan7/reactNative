import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import "./home.css";
import { Button, ButtonGroup, withTheme, Input, Icon } from "react-native-elements";

const Login = ({ navigation }) => {
	const [formData, setFormData] = useState({
		userName: "",
		password: "",
		confirmPassword: "",
	});
	const Login = () => {
		navigation.navigate("Profile");
	};

	const onChangeFuc = (e) => {
		console.log("in on chnage func");
		if (e.target.placeholder === "username") {
			setFormData({
				...formData,
				userName: e.target.value,
			});
		} else if (e.target.placeholder === "password") {
			setFormData({
				...formData,
				password: e.target.value,
			});
		} else if (e.target.placeholder === "confirm password") {
			setFormData({
				...formData,
				confirmPassword: e.target.value,
			});
		}

		localStorage.setItem("fData", JSON.stringify(formData));
	};

	return (
		<>
			<View style={styles.container}>
				<View style={{ display: "flex", flexDirection: "column", border: "1px solid grey", borderRadius: "10px", width: "50%", height: "60%", padding: "50px", color: "#fff", background: "-webkit-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -webkit-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)", background: "-o-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -o-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)", background: "-moz-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -moz-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)", background: "linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)" }}>
					<TextInput onChange={onChangeFuc} placeholder="username" style={styles.ip} />
					<TextInput onChange={onChangeFuc} placeholder="password" style={styles.ip} />
					<TextInput onChange={onChangeFuc} placeholder="confirm password" style={styles.ip} />
					<View>
						{/* <Button title="Login" onPress={() => Login()} /> */}
						<Button
							title="LOG IN"
							buttonStyle={{
								backgroundColor: "#007FFF",
								borderWidth: 2,
								// borderColor: "white",
								borderRadius: 30,
							}}
							containerStyle={{
								width: 270,
								marginHorizontal: 0,
								marginVertical: 30,
							}}
							titleStyle={{ fontWeight: "bold" }}
							onPress={() => Login()}
						/>
					</View>

					<Button
						containerStyle={{
							width: 200,
							marginHorizontal: 40,
							marginVertical: 10,
						}}
						title="Forget Password"
						type="clear"
						titleStyle={{ color: "white" }}
					/>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},

	mainDiv: {
		background: "red",
		display: "flex",
		flexDirection: "column",
		border: "1px solid grey",
		borderRadius: "10px",
		width: "50%",
		height: "60%",
		padding: "50px",
	},

	ip: {
		marginTop: "10px",
		marginBottom: "10px",
		height: 40,
		width: "100%",
		margin: 12,
		borderWidth: 1,
		borderRadius: "30px",
		backgroundColor: "#f8f8ff",
		border: "none",
		padding: 10,
		color: "grey",
	},

	purple: {
		color: "#fff",
		background: "-webkit-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -webkit-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)",
		background: "-o-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -o-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)",
		background: "-moz-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -moz-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)",
		background: "linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)",
	},
});

export default Login;
