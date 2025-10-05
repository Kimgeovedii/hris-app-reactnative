import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function SendScreen() {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [remark, setRemark] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Send Money</Text>
        <Text style={styles.subHeader}>Send to Transact User</Text>

        <Text style={styles.label}>Amount to Send (₦)</Text>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          placeholder="₦000000000"
        />

        <Text style={styles.label}>Recipient Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          placeholder="0000000000"
        />

        <Text style={styles.label}>Remark</Text>
        <TextInput
          style={styles.input}
          value={remark}
          onChangeText={setRemark}
          placeholder="Remark"
        />

        <TouchableOpacity>
          <Text style={styles.otherBank}>Other Banks</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContent: { padding: 20 },
  header: { fontSize: 20, fontWeight: "600", textAlign: "center" },
  subHeader: {
    marginTop: 5,
    color: "gray",
    textAlign: "center",
    fontSize: 14,
    marginBottom: 20,
  },
  label: { fontWeight: "500", marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  otherBank: {
    textAlign: "center",
    color: "#0055FF",
    textDecorationLine: "underline",
    marginBottom: 25,
  },
  button: {
    backgroundColor: "#1A46D9",
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
