import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

type Transaction = {
  id: string;
  type: "Deposit" | "Money Sent";
  amount: number;
  status: "Success" | "Failed" | "Waiting";
  date: string;
  recipient: string;
};

const transactions: Transaction[] = [
  {
    id: "1",
    type: "Money Sent",
    amount: 58250,
    status: "Success",
    date: "1st Jan, 08:32",
    recipient: "YAKUBU PRECIOUS AGBA",
  },
  {
    id: "2",
    type: "Deposit",
    amount: 58250,
    status: "Failed",
    date: "1st Jan, 08:32",
    recipient: "YAKUBU PRECIOUS AGBA",
  },
  {
    id: "3",
    type: "Money Sent",
    amount: 58250,
    status: "Success",
    date: "1st Jan, 08:32",
    recipient: "YAKUBU PRECIOUS AGBA",
  },
  {
    id: "4",
    type: "Deposit",
    amount: 58250,
    status: "Waiting",
    date: "1st Jan, 08:32",
    recipient: "YAKUBU PRECIOUS AGBA",
  },
];

export default function DashboardScreen() {
  const renderTransaction = ({ item }: { item: Transaction }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: item.type === "Deposit" ? "#E6F4EA" : "#EAF3FF",
            },
          ]}
        >
          <Ionicons
            name={item.type === "Deposit" ? "arrow-down" : "arrow-up"}
            size={18}
            color={item.type === "Deposit" ? "#28a745" : "#007AFF"}
          />
        </View>
        <View>
          <Text style={styles.transactionType}>{item.type}</Text>
          <Text style={styles.transactionDetail}>
            {item.date} - {item.recipient}
          </Text>
        </View>
      </View>
      <View style={styles.transactionRight}>
        <Text style={styles.amount}>₦{item.amount.toLocaleString()}</Text>
        <Text
          style={[
            styles.status,
            {
              color:
                item.status === "Success"
                  ? "#28a745"
                  : item.status === "Failed"
                  ? "#dc3545"
                  : "#ff9800",
            },
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Welcome Patricia!</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#333" />
      </View>

      {/* Balance Card */}
      <LinearGradient
        colors={["#0046C0", "#001F8B"]}
        style={styles.balanceCard}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Ionicons
          name="eye-outline"
          size={20}
          color="#fff"
          style={{ marginBottom: 8 }}
        />
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceAmount}>₦28,085.00</Text>
      </LinearGradient>

      {/* Transactions */}
      <View style={styles.transactionsHeader}>
        <Text style={styles.transactionsTitle}>Recent Transactions</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.transactionsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  welcome: {
    fontSize: 20,
    fontWeight: "600",
    color: "#0046C0",
  },
  balanceCard: {
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    marginBottom: 20,
  },
  balanceLabel: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 6,
  },
  balanceAmount: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
  },
  transactionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  transactionsTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  seeAll: {
    fontSize: 14,
    color: "#007AFF",
  },
  transactionsList: {
    paddingBottom: 100,
  },
  transactionItem: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 34,
    height: 34,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  transactionType: {
    fontWeight: "600",
    fontSize: 15,
  },
  transactionDetail: {
    color: "#666",
    fontSize: 12,
  },
  transactionRight: {
    alignItems: "flex-end",
  },
  amount: {
    fontWeight: "600",
    fontSize: 15,
  },
  status: {
    fontSize: 12,
  },
});
