import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

export default function HistoryScreen() {
  const data = {
    labels: ["17/01", "19/01", "21/01", "23/01", "25/01", "27/01", "29/01"],
    datasets: [
      {
        data: [300, 200, 400, 250, 320, 280, 310],
        color: () => "#00b894",
      },
      {
        data: [250, 180, 350, 220, 290, 260, 280],
        color: () => "#0984e3",
      },
    ],
  };

  const transactions = [
    {
      type: "Money Sent",
      amount: "₦58,250.00",
      date: "1st Jan, 08:32 - YAKUBU PRECIOUS AGBA",
      status: "Success",
    },
    {
      type: "Deposit",
      amount: "₦58,250.00",
      date: "1st Jan, 08:32 - YAKUBU PRECIOUS AGBA",
      status: "Failed",
    },
    {
      type: "Money Sent",
      amount: "₦58,250.00",
      date: "1st Jan, 08:32 - YAKUBU PRECIOUS AGBA",
      status: "Success",
    },
    {
      type: "Deposit",
      amount: "₦58,250.00",
      date: "1st Jan, 08:32 - YAKUBU PRECIOUS AGBA",
      status: "Waiting",
    },
    {
      type: "Money Sent",
      amount: "₦58,250.00",
      date: "1st Jan, 08:32 - YAKUBU PRECIOUS AGBA",
      status: "Success",
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Title */}
      <Text style={styles.title}>History</Text>

      {/* Filter row */}
      <View style={styles.filterRow}>
        <Text style={styles.filterText}>All Transactions - All time</Text>
        <View style={styles.iconRow}>
          <Ionicons
            name="cloud-download-outline"
            size={20}
            color="#555"
            style={styles.icon}
          />
          <Ionicons
            name="copy-outline"
            size={20}
            color="#555"
            style={styles.icon}
          />
          <Ionicons name="filter-outline" size={20} color="#555" />
        </View>
      </View>

      {/* Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.sectionTitle}>Weekly</Text>
        <BarChart
          data={data}
          width={screenWidth - 32}
          height={220}
          yAxisLabel="₦"
          yAxisSuffix=""
          chartConfig={{
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            barPercentage: 0.5,
          }}
          style={styles.chart}
        />

        {/* Total summary */}
        <View style={styles.summaryRow}>
          <Text style={[styles.summaryText, { color: "#00b894" }]}>
            Deposit - ₦671,065.00
          </Text>
          <Text style={[styles.summaryText, { color: "#0984e3" }]}>
            Sent - ₦491,005.00
          </Text>
        </View>
      </View>

      {/* Transaction List */}
      <View style={{ marginTop: 16 }}>
        {transactions.map((t, index) => (
          <View key={index} style={styles.transactionCard}>
            <View style={styles.rowBetween}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  name={
                    t.type === "Deposit"
                      ? "arrow-down-circle-outline"
                      : "arrow-up-circle-outline"
                  }
                  size={22}
                  color={t.type === "Deposit" ? "#00b894" : "#0984e3"}
                />
                <Text style={styles.transType}>{t.type}</Text>
              </View>
              <Text style={styles.amount}>{t.amount}</Text>
            </View>

            <View style={styles.rowBetween}>
              <Text style={styles.transDate}>{t.date}</Text>
              <Text
                style={[
                  styles.status,
                  t.status === "Success"
                    ? { color: "#00b894" }
                    : t.status === "Failed"
                    ? { color: "#e74c3c" }
                    : { color: "#f39c12" },
                ]}
              >
                {t.status}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2d3436",
    textAlign: "center",
    marginBottom: 16,
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  filterText: {
    fontSize: 13,
    color: "#636e72",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 6,
  },
  chartContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
    color: "#2d3436",
  },
  chart: {
    borderRadius: 16,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    paddingHorizontal: 4,
  },
  summaryText: {
    fontSize: 12,
    fontWeight: "500",
  },
  transactionCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transType: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2d3436",
    marginLeft: 8,
  },
  amount: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2d3436",
  },
  transDate: {
    fontSize: 11,
    color: "#636e72",
    marginTop: 4,
  },
  status: {
    fontSize: 12,
    fontWeight: "500",
    marginTop: 4,
  },
});
