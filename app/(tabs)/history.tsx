// app/(tabs)/history.tsx
import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from "victory";
import Svg from "react-native-svg";

const screenWidth = Dimensions.get("window").width;

export default function HistoryScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>History</Text>
      <Text style={styles.subtitle}>Ringkasan transaksi mingguan Anda</Text>

      <View style={styles.card}>
        <Svg width={screenWidth - 40} height={250}>
          <VictoryChart
            width={screenWidth - 40}
            height={250}
            theme={VictoryTheme.material}
            domainPadding={25}
            standalone={false}
          >
            <VictoryAxis
              style={{
                axis: { stroke: "transparent" },
                grid: { stroke: "transparent" },
                tickLabels: { fill: "#999", fontSize: 10 },
              }}
            />
            <VictoryAxis
              dependentAxis
              style={{
                axis: { stroke: "transparent" },
                grid: { stroke: "#eee" },
                tickLabels: { fill: "#999", fontSize: 10 },
              }}
            />
            <VictoryBar
              barWidth={18}
              cornerRadius={6}
              style={{
                data: { fill: "#4CAF50" },
              }}
              data={[
                { x: "17/01", y: 300 },
                { x: "19/01", y: 200 },
                { x: "21/01", y: 400 },
                { x: "23/01", y: 250 },
                { x: "25/01", y: 320 },
                { x: "27/01", y: 280 },
                { x: "29/01", y: 310 },
              ]}
            />
          </VictoryChart>
        </Svg>
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.sectionTitle}>Transaksi Terbaru</Text>

        {[
          {
            type: "Deposit",
            amount: "+Rp 500.000",
            date: "02 Okt 2025",
            color: "#4CAF50",
          },
          {
            type: "Send",
            amount: "-Rp 200.000",
            date: "01 Okt 2025",
            color: "#E53935",
          },
          {
            type: "Deposit",
            amount: "+Rp 300.000",
            date: "29 Sep 2025",
            color: "#4CAF50",
          },
        ].map((item, index) => (
          <View style={styles.transactionItem} key={index}>
            <View style={[styles.icon, { backgroundColor: item.color }]} />
            <View style={styles.transactionInfo}>
              <Text style={styles.transactionType}>{item.type}</Text>
              <Text style={styles.transactionDate}>{item.date}</Text>
            </View>
            <Text style={[styles.transactionAmount, { color: item.color }]}>
              {item.amount}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 16,
    paddingVertical: 10,
    marginBottom: 20,
    elevation: 2,
  },
  listContainer: { marginTop: 10 },
  sectionTitle: { fontSize: 16, fontWeight: "600", marginBottom: 10 },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fafafa",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  icon: { width: 12, height: 12, borderRadius: 6, marginRight: 12 },
  transactionInfo: { flex: 1 },
  transactionType: { fontWeight: "600", fontSize: 15 },
  transactionDate: { color: "#999", fontSize: 12 },
  transactionAmount: { fontWeight: "600", fontSize: 15 },
});
