import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#0046C0",
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 70,
          paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={22}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="deposit"
        options={{
          title: "Deposit",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "arrow-down" : "arrow-down-outline"}
              color={color}
              size={22}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="send"
        options={{
          title: "Send",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "arrow-up" : "arrow-up-outline"}
              color={color}
              size={22}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "time" : "time-outline"}
              color={color}
              size={22}
            />
          ),
        }}
      />
    </Tabs>
  );
}
