import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { useAuth } from "../../context/AuthContext";

interface SignInParams {
  phone: string;
  password: string;
}

export default function LoginScreen(): React.ReactElement {
  const { signIn } = useAuth();
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(true);

  const handleLogin = () => {
    const params: SignInParams = { phone, password };
    signIn(params);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <Text style={styles.header}>Login</Text>

        {/* Logo & Title */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/logo/Logo.svg")} // ganti sesuai path logo kamu
            style={styles.logo}
          />
          <Text style={styles.appTitle}>HRIS By Kim Geovedi</Text>
        </View>

        {/* Welcome Text */}
        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.desc}>
          Login to easily save, receive and send money using just your phone
          number
        </Text>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.phoneContainer}>
            <Text style={styles.countryCode}>+62</Text>
            <TextInput
              style={styles.phoneInput}
              placeholder="812xxx"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Type Your Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Remember Me */}
          <View style={styles.rememberRow}>
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => setRemember(!remember)}
            >
              <View
                style={[styles.checkbox, remember && styles.checkboxChecked]}
              />
              <Text style={styles.rememberText}>Remember me</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          {/* Links */}
          <Text style={styles.footerText}>
            Don’t have an account? <Text style={styles.linkText}>Sign Up</Text>
          </Text>

          <TouchableOpacity>
            <Text style={[styles.linkText, { textAlign: "center" }]}>
              Forgot Password
            </Text>
          </TouchableOpacity>

          {/* Terms */}
          <Text style={styles.termsText}>
            By clicking on ‘Next’ you’ve agreed to the{" "}
            <Text style={styles.linkText}>Terms of Use</Text> and{" "}
            <Text style={styles.linkText}>Privacy Policy</Text>.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ✅ Styles mirip desain iPhone di gambar
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    color: "#007bff",
    fontWeight: "500",
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginBottom: 8,
  },
  appTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#003087",
  },
  welcome: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 15,
  },
  desc: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  form: {
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 6,
    color: "#333",
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    height: 50,
  },
  countryCode: {
    fontSize: 16,
    color: "#333",
    marginRight: 8,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    height: 50,
  },
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#888",
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: "#003087",
    borderColor: "#003087",
  },
  rememberText: {
    color: "#333",
  },
  loginButton: {
    backgroundColor: "#003087",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 15,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  footerText: {
    textAlign: "center",
    color: "#333",
    marginBottom: 10,
  },
  linkText: {
    color: "#003087",
    fontWeight: "500",
  },
  termsText: {
    fontSize: 12,
    textAlign: "center",
    color: "#777",
    marginTop: 20,
  },
});
