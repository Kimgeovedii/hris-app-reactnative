import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LandingScreen(): React.ReactElement {
  return (
    <LinearGradient
      colors={["#0046C0", "#001F8B"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.content}>
        <Image
          source={require("../assets/images/logo/Logo.svg")} // ganti dengan path logo kamu
          style={styles.logo}
        />
        <Text style={styles.text}>HRIS By Kim Geovedi</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
});
