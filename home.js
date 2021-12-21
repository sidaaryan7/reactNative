import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

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
				<View style={styles.mainDiv}>
					<TextInput onChange={onChangeFuc} placeholder="username" style={styles.ip} />
					<TextInput onChange={onChangeFuc} placeholder="password" style={styles.ip} />
					<TextInput onChange={onChangeFuc} placeholder="confirm password" style={styles.ip} />
					<View
						style={{
							marginTop: "50px",
						}}
					>
						<Button title="Login" onPress={() => Login()} />
					</View>

					<View
						style={{
							marginTop: "30px",
						}}
					>
						<Button title="Forget Password" />
					</View>
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
	},
});

export default Login;
