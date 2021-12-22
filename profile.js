import { StyleSheet, View, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Avatar, Button, Text } from "react-native-elements";

const Profile = ({ navigation }) => {
	let fData = localStorage.getItem("fData");
	let pData = JSON.parse(fData);

	const Logout = () => {
		navigation.navigate("Home");
	};

	return (
		<>
			<View style={styles.container}>
				<View style={{ display: "flex", flexDirection: "column", border: "1px solid grey", borderRadius: "10px", width: "50%", height: "60%", padding: "50px", background: "-webkit-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -webkit-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)", background: "-o-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -o-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)", background: "-moz-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -moz-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)", background: "linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)" }}>
					<View style={styles.subDiv1}>
						<Avatar size={64} rounded source={"https://uifaces.co/our-content/donated/6MWH9Xi_.jpg"} />
						<Text
							style={{
								paddingTop: "10px",
								paddingBottom: "10px",
							}}
							h4
							h4Style={{
								color: "white",
							}}
						>
							Name
						</Text>
						<Text
							style={{
								paddingTop: "10px",
								paddingBottom: "10px",
							}}
							h4
							h4Style={{
								color: "white",
							}}
						>
							@{pData.userName !== "" ? pData.userName : "username"}
						</Text>
					</View>
					<View
						style={{
							borderBottomColor: "grey",
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
								marginHorizontal: "10px",
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
								marginHorizontal: "10px",
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
								marginHorizontal: "10px",
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
								marginHorizontal: "10px",
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
						width: "70%",
					}}
				>
					<Button
						title="Logout"
						buttonStyle={{
							backgroundColor: "#007FFF",
							borderWidth: 2,
							// borderColor: "white",
							borderRadius: 30,
						}}
						containerStyle={{
							width: 270,
							marginHorizontal: 120,
							marginVertical: 0,
						}}
						titleStyle={{ fontWeight: "bold" }}
						onPress={() => Logout()}
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
		display: "flex",
		flexDirection: "column",
		border: "1px solid grey",
		borderRadius: "10px",
		width: "50%",
		height: "60%",
		padding: "50px",
		background: "-webkit-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -webkit-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)",
		background: "-o-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -o-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)",
		background: "-moz-linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), -moz-radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)",
		background: "linear-gradient(110deg, #a60af3 40%, rgba(0, 0, 0, 0) 30%), radial-gradient(farthest-corner at 0% 0%, #7a00cc 70%, #c03fff 70%)",
	},

	subDiv1: {
		display: "flex",
		alignItems: "center",
	},

	subDiv2: {
		display: "flex",
	},
	com: {
		color: "white",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: "5px",
		paddingBottom: "5px",
	},
});

export default Profile;
