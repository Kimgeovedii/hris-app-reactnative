import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function DepositScreen(): React.ReactElement {
  const [amount, setAmount] = useState("₦25,000.00");
  const [selectedType, setSelectedType] = useState<"bank" | "card">("bank");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <Text style={styles.title}>Deposit Money</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Deposit Amount (₦)</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
          {amount.length > 0 && (
            <TouchableOpacity onPress={() => setAmount("")}>
              <Ionicons name="close-circle" size={20} color="#999" />
            </TouchableOpacity>
          )}
        </View>

        <Text style={[styles.label, { marginTop: 25 }]}>Deposit Type</Text>

        <TouchableOpacity
          style={styles.option}
          onPress={() => setSelectedType("bank")}
        >
          <Text style={styles.optionText}>Bank Transfer</Text>
          <Ionicons
            name={
              selectedType === "bank" ? "radio-button-on" : "radio-button-off"
            }
            size={22}
            color={selectedType === "bank" ? "#0046C0" : "#999"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => setSelectedType("card")}
        >
          <Text style={styles.optionText}>ATM Card</Text>
          <Ionicons
            name={
              selectedType === "card" ? "radio-button-on" : "radio-button-off"
            }
            size={22}
            color={selectedType === "card" ? "#0046C0" : "#999"}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonWrapper}>
        <LinearGradient
          colors={["#0046C0", "#001F8B"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Deposit</Text>
        </LinearGradient>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F3C88",
    textAlign: "center",
    marginBottom: 30,
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: "#444",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
    marginTop: 10,
  },
  optionText: {
    fontSize: 16,
    color: "#000",
  },
  buttonWrapper: {
    marginBottom: 40,
  },
  button: {
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
