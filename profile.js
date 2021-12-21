import { StyleSheet, Text, View, Button, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Profile = ({ navigation }) => {
	let fData = localStorage.getItem("fData");
	let pData = JSON.parse(fData);

	const Logout = () => {
		navigation.navigate("Home");
	};

	return (
		<>
			<View style={styles.container}>
				<View style={styles.mainDiv}>
					<View style={styles.subDiv1}>
						<Image height={"50px"} source={require("./assets/download.png")}></Image>
						<Text
							style={{
								paddingTop: "10px",
								paddingBottom: "10px",
							}}
						>
							Name
						</Text>
						<Text
							style={{
								paddingTop: "10px",
								paddingBottom: "10px",
							}}
						>
							@{pData.userName !== "" ? pData.userName : "username"}
						</Text>
					</View>
					<View
						style={{
							borderBottomColor: "black",
							borderBottomWidth: 1,
						}}
					/>
					<View style={styles.subDiv2}>
						<View style={styles.com}>
							<i class="ri-edit-box-line"></i>
							<Text style={styles.com}>Edit Profile</Text>
							<FontAwesomeIcon icon={faAngleRight} />
						</View>
						<View
							style={{
								borderBottomColor: "grey",
								borderBottomWidth: 1,
							}}
						/>
						<View style={styles.com}>
							<i class="ri-notification-2-line"></i>
							<Text style={styles.com}>Configure Alerts</Text>
							<FontAwesomeIcon icon={faAngleRight} />
						</View>
						<View
							style={{
								borderBottomColor: "grey",
								borderBottomWidth: 1,
							}}
						/>

						<View style={styles.com}>
							<i class="ri-settings-2-line"></i>
							<Text style={styles.com}>Settings</Text>
							<FontAwesomeIcon icon={faAngleRight} />
						</View>
						<View
							style={{
								borderBottomColor: "grey",
								borderBottomWidth: 1,
							}}
						/>

						<View style={styles.com}>
							<i class="ri-question-line"></i>
							<Text style={styles.com}> Help</Text>
							<FontAwesomeIcon icon={faAngleRight} />
						</View>
						<View
							style={{
								borderBottomColor: "grey",
								borderBottomWidth: 1,
							}}
						/>

						<View style={styles.com}>
							<i class="ri-message-line"></i>
							<Text style={styles.com}> Help</Text>
							<FontAwesomeIcon icon={faAngleRight} />
						</View>
					</View>
				</View>

				<View
					style={{
						paddingTop: "10px",
						paddingBottom: "10px",
						width: "50%",
					}}
				>
					<Button title="Logout" onPress={() => Logout()}></Button>
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

	subDiv1: {
		display: "flex",
		alignItems: "center",
	},

	subDiv2: {
		display: "flex",
	},
	com: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: "5px",
		paddingBottom: "5px",
	},
});

export default Profile;
